package com.spring.boot.spring.batch.writer.impl;

import java.io.Closeable;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;
import javax.annotation.PreDestroy;

import com.spring.boot.spring.batch.properties.Product;
import org.springframework.batch.item.ItemWriter;

public class ProductWriterImpl implements ItemWriter<Product>, Closeable {

    private final PrintWriter writer;

    public ProductWriterImpl() {
        OutputStream out;
        try {
            out = new FileOutputStream("output.txt");
        } catch (FileNotFoundException e) {
            out = System.out;
        }
        this.writer = new PrintWriter(out);
    }

    @Override
    public void write(final List<? extends Product> items) throws Exception {
        for (Product item : items) {
            writer.println(item.toString());
        }
    }

    @PreDestroy
    @Override
    public void close() throws IOException {
        writer.close();
    }
}
