package com.java.springboot.custommap.dto;

import java.util.Objects;

public class ActorDetails {

    public String name;
    public int id;
    public String movie;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }
}
