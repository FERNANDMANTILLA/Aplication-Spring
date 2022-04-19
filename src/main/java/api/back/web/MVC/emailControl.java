package api.back.web.MVC;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import api.back.web.Entity.email;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api")
public class emailControl {

  @Autowired
  private api.back.web.Repository.emailRepo emailRepo;
  // post email

  @PostMapping("/save")
  public void getemail(@Valid @ModelAttribute("email") email email, BindingResult result, Model model) {
    if (result.hasErrors()) {
      // print result
      System.out.println(result.toString());
      System.out.println(email.toString());
    } else {
      // check email attributes if not null
      if (email.getEmail() != "" && email.getName() != "" && email.getNumber() != "" &&
        email.getMessage() != "") {
        // save email
        emailRepo.save(email);
        // print email
        System.out.println(email.toString());
      } else {
        // print error
        System.out.println("error");
      }
    }
  }

  // get all emails
  @GetMapping("/emails")
  public Iterable < email > getemails() {
    return emailRepo.findAll();
  }

  // delete all emails
  @DeleteMapping("/d3let3")
  public String deleteAll() {
    try {
      emailRepo.deleteAll();
      return "Deleted all emails!";
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return "Error deleting emails!";
    }
  }

}