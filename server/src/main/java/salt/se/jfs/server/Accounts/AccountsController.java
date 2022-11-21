package salt.se.jfs.server.Accounts;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
public class AccountsController {

    AccountsService service;

    public AccountsController(AccountsService service) {
        this.service = service;
    }

    @GetMapping(path = "/{userId}")
    ResponseEntity<Account> getAccountDetails(@PathVariable long userId){
        return ResponseEntity.ok(service.getDetails(userId));
    }

    @PostMapping(path = "/{accountId}/transaction")
    ResponseEntity<Account> updateAccount(@RequestBody Transaction transaction,@PathVariable long accountId){

        Account account = service.updateAccount(transaction,accountId);
        return ResponseEntity.accepted().body(account);
    }


}
