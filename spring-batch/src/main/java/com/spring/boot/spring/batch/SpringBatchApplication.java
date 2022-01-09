package com.spring.boot.spring.batch;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Step 2: EnableBatchProcessing: Enables Spring Batch features and provides a base configuration for setting up batch jobs
//SpringBootApplication: It's same as declaring a class with @Configuration, @EnableAutoConfiguration and @ComponentScan annotations
@EnableBatchProcessing
@SpringBootApplication
public class SpringBatchApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBatchApplication.class, args);
	}

}
