package com.portfolio.rediscachedemo.controller;

import com.portfolio.rediscachedemo.model.Product;
import com.portfolio.rediscachedemo.service.ProductService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class ProductsController {

    @Autowired
    ProductService productService;

    @ApiResponses({
            @ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Product.class)) }),
            @ApiResponse(responseCode = "404", description = "Products not found",
                    content = @Content) })
    @Tag(name = "get", description = "GET method to get list of all Products")
    @GetMapping("/product")
    public ResponseEntity<List<Product>> getProductList(){
        return new ResponseEntity<>(productService.getProductList(), HttpStatus.OK);
    }

    @ApiResponses({
            @ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Product.class)) }),
            @ApiResponse(responseCode = "404", description = "Products not found",
                    content = @Content) })
    @Tag(name = "get", description = "GET method to get Product by Id")
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) throws ExecutionException, InterruptedException {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }
    @ApiResponses({
            @ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Product.class)) }) })
    @Tag(name = "post", description = "POST method to create new Product")
    @PostMapping("/product")
    public ResponseEntity<String> createProduct(@RequestBody Product product){
        productService.createProduct(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/health")
    public String health(){
        return "UP";
    }

}
