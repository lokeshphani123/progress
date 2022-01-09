package com.process.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/sqs")
public class Processor {

    @GetMapping("/{param}")
    public ResponseEntity<String> getJSON(@PathVariable("param") String param){
        return new ResponseEntity<String>("AWS Playground "+param, HttpStatus.OK);
    }
}
