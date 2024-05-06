package com.portfolio.rediscachedemo.service;

import com.portfolio.rediscachedemo.model.Product;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ProductService {

    public List<Product> getProductList();

    public Product getProductById(Long id) throws ExecutionException, InterruptedException;

    public void createProduct(Product product);

}
