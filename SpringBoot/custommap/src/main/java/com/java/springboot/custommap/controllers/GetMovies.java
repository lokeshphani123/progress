package com.java.springboot.custommap.controllers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.springboot.custommap.dto.ActorDetails;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.lang.reflect.Type;
import java.util.List;

@RestController("/movies")
public class GetMovies {
    private ResourceLoader resourceLoader;


    @GetMapping
    public List<ActorDetails> getActorDetails() throws IOException {

        return resourceData();
    }

    public List<ActorDetails> resourceData() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        List<ActorDetails> actorDetailsList = mapper.readValue(new File("cachedata/sample.json"), new TypeReference<List<ActorDetails>>() {
        });
        return actorDetailsList;
    }
}
