package salt.se.jfs.server.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping(path = "/{email}")
    ResponseEntity<User> getUserWithEmail(@PathVariable String email){
        try {
            User user = userService.getUserWithEmail(email);
            return ResponseEntity.ok(user);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/user/{id}")
    ResponseEntity<User> getUserWithId(@PathVariable Long id){
        try {
            User user = userService.getUserWithId(id);
            return ResponseEntity.ok(user);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    ResponseEntity<User> createUser(@RequestBody UserDto userDto){
        User user = userService.createUser(userDto);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong, no user was created");
        }
        URI location = URI.create("/api/users/user/" + user.getUserId());
        return ResponseEntity.created(location).body(user);

    }


    @PatchMapping
    ResponseEntity<User> updateUserInfo(@RequestBody UserDto userDto){
        try {
            User updatedUser = userService.updateUserInfo(userDto);
            return ResponseEntity.ok(updatedUser);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
