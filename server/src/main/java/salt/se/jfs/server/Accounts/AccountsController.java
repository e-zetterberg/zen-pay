package salt.se.jfs.server.Accounts;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import salt.se.jfs.server.User.User;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountsController {

    AccountsService service;

    public AccountsController(AccountsService service) {
        this.service = service;
    }

    @GetMapping(path = "/{userId}")
    ResponseEntity<Account> getAccountDetails(@PathVariable long userId){
        try {
            Account account = service.getDetails(userId);
            return ResponseEntity.ok(account);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/transfer/{fromAccount}/{toAccount}")
    ResponseEntity<Account> transferMoney(
            @RequestBody Transaction transaction,
            @PathVariable long fromAccount,
            @PathVariable long toAccount){
        try {
            Account account = service.transferMoney(transaction, fromAccount, toAccount);
            return ResponseEntity.ok(account);
        } catch (NoSuchElementException e){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    ResponseEntity<Account> createAccount(@RequestBody User user){
        Account account = service.createAccount(user);
        return ResponseEntity.ok(account);
    }

    @PostMapping(path = "/{accountId}/transaction")
    ResponseEntity<Account> updateAccount(@RequestBody Transaction transaction, @PathVariable long accountId){
        try {
            Account account = service.updateAccount(transaction, accountId);
            return ResponseEntity.accepted().body(account);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
