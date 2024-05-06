package com.portfolio.rediscachedemo.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI defineOpenApi() {
        Server server = new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("Development");

        Contact owner = new Contact();
        owner.setName("Lokesh Bodavula");
        owner.setEmail("lokeshphani123@gmail.com");

        Info information = new Info()
                .title("Product Management System API")
                .version("1.0")
                .contact(owner);
        return new OpenAPI().info(information).servers(List.of(server));
    }

}
