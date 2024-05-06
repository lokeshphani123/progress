package com.portfolio.rediscachedemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class Product implements Serializable {

    @Id
    private Long productId;

    private String productName;

    private Integer productQuantity;
}
