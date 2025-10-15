package bw.co.centralkyc.document;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import io.swagger.v3.oas.annotations.tags.Tag;

@RequestMapping("/document/download")
@Tag(name = "Document Attachments", description = "Managing document attached to different targets.")
public interface DocumentDownload {
    
    @GetMapping("/{id}")
    public ResponseEntity<InputStreamResource> downloadFile(@PathVariable  String id) ;

}
