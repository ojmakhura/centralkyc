package bw.co.centralkyc.config;

// import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.JacksonJsonMessageConverter;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import bw.co.centralkyc.properties.RabbitProperties;
import tools.jackson.databind.json.JsonMapper;

@Configuration
@EnableConfigurationProperties(RabbitProperties.class)
public class RabbitMQConfig {
    private final CachingConnectionFactory cachingConnectionFactory;
    private final RabbitProperties rabbitProperties;

    public RabbitMQConfig(CachingConnectionFactory cachingConnectionFactory, RabbitProperties rabbitProperties) {
        this.cachingConnectionFactory = cachingConnectionFactory;
        this.rabbitProperties = rabbitProperties;
    }

    @Bean
    public Queue createDocumentExchangeQueue() {

        return QueueBuilder.durable(rabbitProperties.getDocumentHandler())
                .withArgument("x-dead-letter-exchange", "x.document-dispatch-failure")
                .withArgument("x-dead-letter-routing-key", "fall-back")
                .build();
    }


    @Bean
    public Declarables createPostDispatchSchema() {
        return new Declarables(
                new FanoutExchange("x.post-document-dispatch"),
                new Queue(rabbitProperties.getDocumentDispatchQueue(), true),
                new Binding(rabbitProperties.getDocumentDispatchQueue(), Binding.DestinationType.QUEUE,
                        "x.post-document-dispatch", rabbitProperties.getDocumentDispatchRoutingKey(), null));
    }

    @Bean
    public Declarables createDeadLetterSchema() {
        return new Declarables(
                new DirectExchange("x.document-dispatch-failure"),
                new Queue("q.fall-back-document-dispatch"),
                new Binding("q.fall-back-document-dispatch", Binding.DestinationType.QUEUE, "x.document-dispatch-failure",
                        "document-fall-back", null));
    }

    @Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(
            JacksonJsonMessageConverter converter) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(cachingConnectionFactory);
        factory.setAcknowledgeMode(AcknowledgeMode.AUTO);
        factory.setDefaultRequeueRejected(false);
        factory.setMessageConverter(converter); // important!
        // factory.setBatchListener(true);
        return factory;
    }

    /// Queue creation
    @Bean
    public Queue createDocumentQueue() {

        return QueueBuilder.durable(rabbitProperties.getDocumentQueue())
                .build();
    }

    /// Queue schema
    @Bean
    public Declarables createDocumentQueueSchema() {

        return new Declarables(
                new DirectExchange(rabbitProperties.getDocumentQueueExchange()),
                documentQueue(),
                documentQueueBinding());
    }


    /// Queue definitions
    @Bean
    Queue documentQueue() {
        return new Queue(rabbitProperties.getDocumentQueue(), true);
    }

    /// Queue exchanges
    @Bean
    DirectExchange documentQueueExchange() {
        return new DirectExchange(rabbitProperties.getDocumentQueueExchange());
    }

    /// Queue bindings
    @Bean
    Binding documentQueueBinding() {
        return BindingBuilder.bind(documentQueue()).to(documentQueueExchange())
                .with(rabbitProperties.getDocumentQueueRoutingKey());
    }

    @Bean
    public JacksonJsonMessageConverter converter(JsonMapper mapper) {
        return new JacksonJsonMessageConverter(mapper);
    }

    @Bean
    public RabbitTemplate rabbitTemplate(JacksonJsonMessageConverter converter) {
        RabbitTemplate template = new RabbitTemplate(cachingConnectionFactory);

        // mapper.setDate;
        template.setMessageConverter(converter);
        return template;
    }
}
