package salt.se.jfs.server.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import salt.se.jfs.server.Accounts.Account;
import salt.se.jfs.server.Accounts.AccountsService;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(path = "/{email}")
    ResponseEntity<User> getUserWithEmail(@PathVariable String email){
        try {
            User user = service.getUserWithEmail(email);
            return ResponseEntity.ok(user);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
