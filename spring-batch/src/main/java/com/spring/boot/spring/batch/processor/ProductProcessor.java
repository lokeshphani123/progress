package com.spring.boot.spring.batch.processor;

public interface ProductProcessor<I, O> {
    O process(I item) throws Exception;
}
