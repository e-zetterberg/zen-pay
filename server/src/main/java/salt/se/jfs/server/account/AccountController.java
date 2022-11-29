package salt.se.jfs.server.account;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import salt.se.jfs.server.account.dtos.CardDto;
import salt.se.jfs.server.account.dtos.TransactionDto;
import salt.se.jfs.server.user.UserDto;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountController {

    AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    @GetMapping(path = "/{accountId}")
    ResponseEntity<Account> getAccount(@PathVariable long accountId){
        System.out.println(accountId);
        try {
            Account account = service.getAccount(accountId);
            return ResponseEntity.ok(account);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{accountId}/card")
    ResponseEntity<CardDto> saveCardDetails(
            @PathVariable long accountId,
            @RequestBody CardDto cardDto){
        try {
            Account account = service.getAccount(accountId);
            account.getCards().add(new Card(cardDto));
            CardDto dto = service.updateCardDetailsToAccount(account);
            return ResponseEntity.accepted().body(dto);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }


    }

    @GetMapping("/{accountId}/balance")
    ResponseEntity<Double> getBalance(@PathVariable long accountId){
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
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

    @PostMapping(path = "/{accountId}/transaction")
    ResponseEntity<Account> updateAccount(@RequestBody TransactionDto transactionDto, @PathVariable long accountId){
        try {
            Account account = service.addTransactionToAccount(transactionDto, accountId);
            return ResponseEntity.accepted().body(account);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
