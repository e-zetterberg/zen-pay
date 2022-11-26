package salt.se.jfs.server.account;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import salt.se.jfs.server.account.dtos.TransactionDto;
import salt.se.jfs.server.user.User;
import salt.se.jfs.server.user.UserDto;

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
            Account account = service.getAccountForUser(userId);
            return ResponseEntity.ok(account);

        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{userId}/balance")
    ResponseEntity<Double> getBalance(@PathVariable long userId){
        try {
            Double balance = service.getAccountForUser(userId).getBalance();
            return ResponseEntity.ok(balance);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/transfer/{fromAccount}/{toAccount}")
    ResponseEntity<Account> transferMoney(
            @RequestBody TransactionDto transactionDto,
            @PathVariable long fromAccount,
            @PathVariable long toAccount){
        try {
            Account account = service.transferMoney(transactionDto, fromAccount, toAccount);
            return ResponseEntity.ok(account);
        } catch (NoSuchElementException e){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    ResponseEntity<Account> createAccount(@RequestBody UserDto userDto){
        Account account = service.createAccount(userDto);
        return ResponseEntity.ok(account);
    }

    @PostMapping(path = "/{accountId}/transaction")
    ResponseEntity<Account> updateAccount(@RequestBody TransactionDto transactionDto, @PathVariable long accountId){
        try {
        Transaction transaction = new Transaction(transactionDto);
            Account account = service.updateAccount(transaction, accountId);
            return ResponseEntity.accepted().body(account);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
