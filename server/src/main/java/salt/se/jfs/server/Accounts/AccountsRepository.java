package salt.se.jfs.server.Accounts;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import salt.se.jfs.server.User.JpaUserRepository;
import salt.se.jfs.server.User.User;

@Repository
public class AccountsRepository {
    JpaAccountsRepository repo;
    JpaUserRepository userRepo;

    public AccountsRepository(JpaAccountsRepository repo, JpaUserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    public Account getAccountDetails(long userId) {
        return repo.findAccountByUser_UserId(userId).orElseThrow();
    }



    public Account updateAccountDetails(Account account) {
        return repo.save(account);
    }

    public Account getAccount(long accountId) {

        return repo.findById(accountId).orElseThrow();
    }

    public Account createAccount(User user) {

        return repo.save(new Account(user));
    }
}
