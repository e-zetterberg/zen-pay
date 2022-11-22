package salt.se.jfs.server.Accounts;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

@Repository
public class AccountsRepository {
    JpaAccountsRepository repo;

    public AccountsRepository(JpaAccountsRepository repo) {
        this.repo = repo;
    }


    public Account getAccountDetails(long userId) {
        return repo.findAccountByCustomer_CustomerId(userId).orElseThrow();
    }



    public Account updateAccountDetails(Account account) {
        return repo.save(account);
    }

    public Account getAccount(long accountId) {

        return repo.findById(accountId).orElseThrow();
    }

    public Account createAccount() {
        return repo.save(new Account());
    }
}
