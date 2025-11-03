package bw.co.centralkyc.document;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import bw.co.centralkyc.RestApiResponse;
import bw.co.centralkyc.minio.MinioService;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DocumentDownloadImpl implements DocumentDownload {

    private DocumentService documentService;
    private final MinioService minioService;

    public DocumentDownloadImpl(DocumentService documentService, MinioService minioService) {
        this.documentService = documentService;
        this.minioService = minioService;
    }

    private InputStreamResource downloadFromMinio(String url) throws Exception {

        // Download the file from MinIO
        InputStream inputStream = minioService.downloadFile(url);
        // Process the input stream as needed
        System.out.println("File downloaded from MinIO: " + url);
        InputStreamResource resource = new InputStreamResource(inputStream);
        return resource;
    }

    @Override
    public ResponseEntity<InputStreamResource> downloadFile(String id) {
        try {

            DocumentDTO document = documentService.findById(id);
            InputStreamResource data = downloadFromMinio(document.getUrl());
            ResponseEntity<InputStreamResource> response = ResponseEntity.status(HttpStatus.OK)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + document.getUrl() + "\"")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(data);

            return response;

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw new DocumentServiceException("Error downloading file: " + e.getMessage());
        }
    }

    public ResponseEntity<InputStreamResource> downloadFileByUrl(@RequestParam String objectName) throws Exception {

        InputStreamResource data = downloadFromMinio(objectName);
        ResponseEntity<InputStreamResource> response = ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + objectName + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(data);

        return response;

    }

}
