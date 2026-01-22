# Translation Configuration

This application uses `@ngx-translate/core` for internationalization (i18n).

## Setup

The translation system has been configured with:

- **Translation Files**: Located in `src/assets/i18n/`
  - `en.json` - English translations
  - `es.json` - Spanish translations

- **TranslationService**: A custom service (`src/app/services/translation.service.ts`) that:
  - Manages the current language
  - Persists language selection to localStorage
  - Provides easy language switching

- **LanguageSelectorComponent**: A reusable component (`src/app/components/language-selector.component.ts`) for switching languages

## Usage

### In Templates

Use the `translate` pipe to display translated text:

```html
<h1>{{ 'app.title' | translate }}</h1>
<p>{{ 'common.save' | translate }}</p>
```

### In Components

Inject the `TranslationService` and use its methods:

```typescript
import { Component, inject } from '@angular/core';
import { TranslationService } from './services/translation.service';

export class MyComponent {
  private readonly translationService = inject(TranslationService);

  changeLanguage(lang: 'en' | 'es'): void {
    this.translationService.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationService.instant(key);
  }
}
```

### Getting Current Language

Access the current language as a signal:

```typescript
const currentLang = this.translationService.currentLang();
```

## Adding New Languages

1. Create a new JSON file in `src/assets/i18n/` (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate the values
3. Update `TranslationService`:
   ```typescript
   export type Language = 'en' | 'es' | 'fr';
   availableLanguages: Language[] = ['en', 'es', 'fr'];
   ```

## Adding New Translation Keys

1. Add the key-value pair to all language files:

**en.json**
```json
{
  "myFeature": {
    "title": "My Feature",
    "description": "This is my feature"
  }
}
```

**es.json**
```json
{
  "myFeature": {
    "title": "Mi Función",
    "description": "Esta es mi función"
  }
}
```

2. Use the key in your templates or components:
```html
<h2>{{ 'myFeature.title' | translate }}</h2>
```

## Translation with Parameters

You can pass parameters to translations:

**Translation file:**
```json
{
  "welcome": "Welcome, {{name}}!"
}
```

**Usage:**
```html
{{ 'welcome' | translate: { name: userName } }}
```

## Default Language

The default language is English ('en'). The system will:
1. First check localStorage for a saved language preference
2. Fall back to the default language if none is saved

## Browser Compatibility

The translation system uses:
- `localStorage` for persistence
- Modern Angular signals for reactivity
- HttpClient for loading translation files

All modern browsers are supported.
