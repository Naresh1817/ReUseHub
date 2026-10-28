package com.reusehub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ReuseHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReuseHubApplication.class, args);
    }
}

