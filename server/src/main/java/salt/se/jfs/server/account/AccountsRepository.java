package salt.se.jfs.server.account;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import salt.se.jfs.server.user.JpaUserRepository;
import salt.se.jfs.server.user.User;

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
    @Transactional
    public Account saveAccounts(Account sender, Account receiver){
        repo.save(receiver);
        return repo.save(sender);
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
