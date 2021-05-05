package com.java.springboot.tomcatconfig.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class Notes {

    @GetMapping("/")
    public Map getNotes(){
        Map<String, String> map = new HashMap();

        map.put("Problem ", "We can't see Tomcat's logs by default");
        map.put("Solution ", "Configure Spring Boot to show Tomcat's Internal and Access logs ");
        map.put("Internal Logs ", "Helpful to solve any server-side issues. Customised by tomcat & catalina");
        map.put("Access Logs", "Customised by suffix, prefix, file-date-format, pattern, directory & basedir");
        map.put("Problem ", "We can't see Tomcat's logs by default");

        return map;
    }
}
