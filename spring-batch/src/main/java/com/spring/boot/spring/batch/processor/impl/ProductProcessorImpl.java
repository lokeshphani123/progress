package com.spring.boot.spring.batch.processor.impl;

import com.spring.boot.spring.batch.processor.ProductProcessor;
import com.spring.boot.spring.batch.properties.Product;
import org.springframework.batch.item.ItemProcessor;

import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 *
 * ItemProcessors transform input items and introduce business logic in an item-oriented processing scenario.
 *
 * eturning null indicates that the item should not continue to be processed. As usual, Spring provides few standard processors,
 * such as CompositeItemProcessor that passes the item through a sequence of injected ItemProcessors and a ValidatingItemProcessor that validates input.
 *
 *
 */

public class ProductProcessorImpl implements ItemProcessor<Product,Product> {

    @Override
    public Product process(final Product item) throws Exception {
        if (new GregorianCalendar().get(Calendar.MONTH) == item.getBirthday().get(Calendar.MONTH)) {
            return item;
        }
        return null;
    }
}
