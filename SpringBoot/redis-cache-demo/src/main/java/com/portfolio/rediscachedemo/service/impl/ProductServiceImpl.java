package com.portfolio.rediscachedemo.service.impl;

import com.portfolio.rediscachedemo.model.Product;
import com.portfolio.rediscachedemo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.function.Consumer;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private HashOperations<String, String, Product> hashOperations;

    List<Product> productList = new ArrayList<>();
    @Override
    public List<Product> getProductList() {
        return productList;
    }

    @Override
    public Product getProductById(Long id) throws ExecutionException, InterruptedException {
        return hashOperations.get("products", id.toString());
    }

    @Override
    public void createProduct(Product product) {
        hashOperations.put("products", product.getProductId().toString(), product);
        productList.add(product);
    }

    public void getProductFromMono(Mono<Product> productMono, Consumer<Product> onSuccess, Consumer<Throwable> onError) {
        productMono.subscribe(onSuccess, onError);
    }
}
