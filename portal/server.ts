import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Routes that should be server-side rendered
  const ssrRoutes = ['/privacy-policy', '/terms-of-service'];

  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
  }));

  // Apply SSR only to specific routes
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    
    // Check if the current route should be SSR
    const shouldSSR = ssrRoutes.some(route => originalUrl.startsWith(route));
    
    if (!shouldSSR) {
      // For non-SSR routes, serve index.html and let Angular handle routing
      res.sendFile(join(browserDistFolder, 'index.html'));
      return;
    }

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
