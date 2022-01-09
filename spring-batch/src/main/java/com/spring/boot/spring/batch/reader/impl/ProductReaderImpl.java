package com.spring.boot.spring.batch.reader.impl;

import com.spring.boot.spring.batch.properties.Product;
import com.spring.boot.spring.batch.reader.ProductReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.NonTransientResourceException;
import org.springframework.batch.item.ParseException;
import org.springframework.batch.item.UnexpectedInputException;
import org.springframework.batch.item.support.IteratorItemReader;

import java.beans.XMLDecoder;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;


/**
 *
 * An ItemReader provides the data and is expected to be stateful.
 * It is typically called multiple times for each batch, with each call to read() returning the next value
 * and finally returning null when all input data has been exhausted.
 *
 */

public class ProductReaderImpl implements ProductReader {

    //the ProductReader class delegates actual read() calls to a lazily initialized instance of the IteratorItemReader class

    private static final Logger logger = LoggerFactory.getLogger(ProductReaderImpl.class);

    private final String fileName;

    private ItemReader<Product> productItemReader;

    public ProductReaderImpl(String fileName) {
        this.fileName = fileName;
    }


    @Override
    public Product read() throws Exception, UnexpectedInputException, ParseException, NonTransientResourceException {

        if(productItemReader == null){
            logger.info("Creating iterator item reader");
            productItemReader = new IteratorItemReader<Product>(products());
        }
        logger.info("Reading next customer");
        return productItemReader.read();
    }

    private List<Product> products() throws FileNotFoundException {
        try (XMLDecoder decoder = new XMLDecoder(new FileInputStream(fileName))) {
            return (List<Product>) decoder.readObject();
        }
    }
}
