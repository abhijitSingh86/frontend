package app.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticController {

    @GetMapping(value = "/")
    public String index(){
        return "index";
    }

    @GetMapping(value="/success")
    public String success(){
        return "index";
    }
}
