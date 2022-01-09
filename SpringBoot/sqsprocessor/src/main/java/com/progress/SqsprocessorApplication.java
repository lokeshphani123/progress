package com.progress;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.aws.autoconfigure.context.ContextStackAutoConfiguration;
import org.springframework.cloud.aws.messaging.core.QueueMessagingTemplate;
import org.springframework.cloud.aws.messaging.listener.annotation.SqsListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication(exclude = {ContextStackAutoConfiguration.class})
@RestController
public class SqsprocessorApplication {


	@Autowired
	private QueueMessagingTemplate queueMessagingTemplate;

	@Value("${cloud.aws.end-point.uri}")
	private String endpoint;

//	@GetMapping("/put")
//	public String putMessageToQueue() {
//		logger.info("I am WORKING!! {}", "message" );
//		//queueMessagingTemplate.send(endpoint, MessageBuilder.withPayload(message).build());
//		return "OK";
//	}

	@SqsListener("Buffer_Queue_dev")
	public void loadMessageFromSQS(String message)  {
		logger.info("message from SQS Queue {}",message);
	}

	public static void main(String[] args) {
		SpringApplication.run(SqsprocessorApplication.class, args);
	}
	Logger logger = LoggerFactory.getLogger(SqsprocessorApplication.class);

}
