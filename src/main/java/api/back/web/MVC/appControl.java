package api.back.web.MVC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import api.back.web.Entity.email;

@Controller

public class appControl {

    // requestMapping index
    @GetMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index")
                .addObject("email", new email());
    }

}
