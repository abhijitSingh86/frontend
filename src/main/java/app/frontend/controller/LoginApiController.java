package app.frontend.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotBlank;


@RestController
@Validated
@RequestMapping("/api/login")
public class LoginApiController {

    @PostMapping
    public String login(@RequestParam @NotBlank(message = "Username can't be null") String username){
        return "{ \"user\": \""+username+"\"}";
    }
}
