package bw.co.centralkyc.document.processor;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class FallbackDocumentProcessorDispatchService {
    
    @RabbitListener(queues = "q.fall-back-document-dispatch")
    public void handleFailedDocumentDispatch(String documentId) {
        log.error("Failed to dispatch document with id: {}", documentId);
    }

}
