package com.spring.boot.spring.batch.writer;

import java.util.List;

public interface ProductWriter<T> {
    void write(List<? extends T> items) throws Exception;
}
