package com.progress.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.messaging.core.QueueMessagingTemplate;
import org.springframework.cloud.aws.messaging.listener.annotation.SqsListener;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QueueController {

    private static final Logger logger = LoggerFactory.getLogger(QueueController.class);

    @Autowired
    QueueMessagingTemplate queueMessagingTemplate;


    @Value("${cloud.aws.end-point.uri}")
    private String endpoint;

    @GetMapping("/event")
    public String putMessage(){
        logger.info("I am working!!");
        return "OK";
    }
//    @GetMapping("/send/{message}")
//    public void sendMessageToQueue(@PathVariable String message) {
//        queueMessagingTemplate.send(endpoint, MessageBuilder.withPayload(message).build());
//    }
//
//    @SqsListener("listen")
//    public void loadMessageFromQueue(String message){
//        logger.info("Message from SQS {} ", message);
//    }

}
