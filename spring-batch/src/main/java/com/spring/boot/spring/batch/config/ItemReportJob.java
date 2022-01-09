package com.spring.boot.spring.batch.config;

import com.spring.boot.spring.batch.processor.TransactionValidatingProcessor;
import com.spring.boot.spring.batch.processor.impl.ProductProcessorImpl;
import com.spring.boot.spring.batch.properties.Product;
import com.spring.boot.spring.batch.reader.impl.ProductReaderImpl;
import com.spring.boot.spring.batch.writer.impl.ProductWriterImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.NoSuchJobException;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.support.CompositeItemProcessor;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.PreDestroy;
import java.util.Arrays;

//Step 2:
//Configuration: Indicates that a class declares one or more @Bean methods and may be processed by the Spring container to generate bean definitions and service requests for those beans at runtime
@Configuration
public class ItemReportJob {

    private static final Logger logger = LoggerFactory.getLogger(ItemReportJob.class);

    public static final String XML_FILE = "database.xml";

    private static final String JOB_NAME = "productReportJob";

    @Autowired
    private JobBuilderFactory jobBuilderFactory;

    @Autowired
    private StepBuilderFactory stepBuilderFactory;

    @Autowired
    private JobExplorer jobs;

    @Autowired
    private JobLauncher jobLauncher;

    @PreDestroy
    public void destroy() throws NoSuchJobException {
        jobs.getJobNames().forEach(name -> logger.info("job name: {}", name));
        jobs.getJobInstances(JOB_NAME, 0, jobs.getJobInstanceCount(JOB_NAME)).forEach(
                jobInstance -> {
                    logger.info("job instance id {}", jobInstance.getInstanceId());
                }
        );

    }

    @Scheduled(fixedRate = 5000)
    public void run() throws Exception {
        JobExecution execution = jobLauncher.run(
                productReportJob(),
                new JobParametersBuilder().addLong("uniqueness", System.nanoTime()).toJobParameters()
        );
        logger.info("Exit status: {}", execution.getStatus());
    }


    //Bean: When JavaConfig encounters such a method, it will execute that method and register the return value as a bean within a BeanFactory. By default, the bean name will be the same as the method name
    @Bean
    public Job productReportJob(){
        return jobBuilderFactory.get(JOB_NAME).start(taskletStep()).next(chunkStep()).build();
    }

    @Bean
    public Step taskletStep(){
        return stepBuilderFactory.get("taskletStep").tasklet(tasklet()).build();
    }

    @Bean
    public Tasklet tasklet(){
        return (contribution, chunkContext) -> {
            return RepeatStatus.FINISHED;
        };
    }

    //Chunk: builds a step that processes items in chunks with the size provided, with each chunk then being passed to the specified reader, processor, and writer
    @Bean
    public Step chunkStep(){
        return stepBuilderFactory.get("chunkStep").<Product, Product>chunk(20).reader(reader()).processor(processor()).writer(writer()).build();
    }

    @StepScope
    @Bean
    public ItemReader<Product> reader() {
        return (ItemReader<Product>) new ProductReaderImpl(XML_FILE);
    }

    @StepScope
    @Bean
    public ItemProcessor<Product, Product> processor() {
        final CompositeItemProcessor<Product, Product> processor = new CompositeItemProcessor<>();
        processor.setDelegates(Arrays.asList(itemProcessor(),transactionValidatingProcessor()));
        return processor;
    }

    @StepScope
    @Bean
    public ProductProcessorImpl itemProcessor() {
        return new ProductProcessorImpl();
    }

    @StepScope
    @Bean
    public TransactionValidatingProcessor transactionValidatingProcessor() {
        return new TransactionValidatingProcessor(5);
    }

    @Bean
    public ItemWriter<Product> writer() {
        return new ProductWriterImpl();
    }
}
