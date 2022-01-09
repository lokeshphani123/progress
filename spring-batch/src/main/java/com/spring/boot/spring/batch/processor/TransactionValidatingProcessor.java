package com.spring.boot.spring.batch.processor;

import com.spring.boot.spring.batch.properties.Product;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.validator.ValidatingItemProcessor;
import org.springframework.batch.item.validator.ValidationException;

public class TransactionValidatingProcessor extends ValidatingItemProcessor<Product> {

    private static final Logger logger = LoggerFactory.getLogger(TransactionValidatingProcessor.class);
    public TransactionValidatingProcessor(final int limit) {
        super(
                item -> {
                    if (item.getTransactions() >= limit) {
                        throw new ValidationException("Product has more than " + limit + " transactions");
                    }
                    logger.info("Product {} matched the transaction filter", item);
                }
        );
        setFilter(true);
    }
}