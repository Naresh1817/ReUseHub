package com.reusehub.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Value("${cloudinary.cloud-name:reusehub-dev}")
    private String cloudName;

    @Value("${cloudinary.api-key:dummy_key}")
    private String apiKey;

    @Value("${cloudinary.api-secret:dummy_secret}")
    private String apiSecret;

    public Map<String, String> getCloudinaryConfigMap() {
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name", cloudName);
        config.put("api_key", apiKey);
        config.put("api_secret", apiSecret);
        return config;
    }
}

