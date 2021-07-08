package com.hugos.hm.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

//@EnableWebMvc
//@Configuration
//public class TemplateFile extends WebMvcConfigurerAdapter {
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry){
//        registry.addResourceHandler("/static/**")
//        .addResourceLocations("/WEB-INF/app/build/static/");
//        registry.addResourceHandler("/*.js")
//                .addResourceLocations("/WEB-INF/app/build/");
//        registry.addResourceHandler("/*.json")
//                .addResourceLocations("/WEB-INF/app/build/");
//        registry.addResourceHandler("/*.ico")
//                .addResourceLocations("/WEB-INF/app/build/");
//        registry.addResourceHandler("/index.html")
//                .addResourceLocations("/WEB-INF/app/build/index.html");
//    }
//}

@Controller
public class TemplateFile{
    @RequestMapping(value = {"/", "/login", "/artwork"})
    public String index(){
        return "index";
    }
}
