package salt.se.jfs.server.account;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import salt.se.jfs.server.user.JpaUserRepository;
import salt.se.jfs.server.user.User;

@Repository
public class AccountRepository {
    JpaAccountsRepository repo;
    JpaUserRepository userRepo;

    public AccountRepository(JpaAccountsRepository repo, JpaUserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    @Transactional
    public Account saveAccounts(Account sender, Account receiver){
        repo.save(receiver);
        return repo.save(sender);
    }

    public Account saveAccount(Account account) {
        return repo.save(account);
    }

    public Account getAccount(long accountId) {

        return repo.findById(accountId).orElseThrow();
    }

}
