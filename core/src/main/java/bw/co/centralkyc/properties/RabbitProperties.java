package bw.co.centralkyc.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;

@ConfigurationProperties(prefix = "app.rabbitmq")
@AllArgsConstructor
public class RabbitProperties {

    private final String host;
    private final int port;
    private final String username;
    private final String password;
    // Document properties
    private final String documentHandler;
    private final String documentDispatchExchange;
    private final String documentDispatchQueue;
    private final String documentDispatchRoutingKey;
    private final String documentQueueExchange;
    private final String documentQueue;
    private final String documentQueueRoutingKey;
    

    public String getHost() {
        return host;
    }

    public int getPort() {
        return port;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getDocumentDispatchQueue() {
        return documentDispatchQueue;
    }

    public String getDocumentDispatchRoutingKey() {
        return documentDispatchRoutingKey;
    }

    public String getDocumentQueue() {
        return documentQueue;
    }

    public String getDocumentQueueRoutingKey() {
        return documentQueueRoutingKey;
    }

    public String getDocumentDispatchExchange() {
        return documentDispatchExchange;
    }

    public String getDocumentQueueExchange() {
        return documentQueueExchange;
    }

    public String getDocumentHandler() {
        return documentHandler;
    }
}
