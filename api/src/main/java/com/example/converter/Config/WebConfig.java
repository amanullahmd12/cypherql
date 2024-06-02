package com.example.converter.Config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/convert/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET","POST") // Adjust methods as needed
                .allowedHeaders("*") // Allow any headers
                .allowCredentials(true);
    }
}