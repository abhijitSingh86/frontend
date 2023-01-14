package app.frontend.controller;


import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.constraints.NotBlank;
import java.io.IOException;

@RestController
@Validated
@RequestMapping("/api/file")
public class FileApiController {

    @PostMapping
    public String upload(@RequestParam("file") MultipartFile file) throws IOException {

        System.out.println(new String(file.getBytes()));
        return "{ \"status\": \"success\"}";
    }
}
