package salt.se.jfs.server.Accounts;

import org.springframework.stereotype.Service;

@Service
public class AccountsService {

    AccountsRepository repo;

    public AccountsService(AccountsRepository repo) {
        this.repo = repo;
    }

    public Account getDetails(long userId) {
        return repo.getAccountDetails(userId);
    }

    public Account createAccount(){
        return repo.createAccount();
    }

    public Account updateAccount(Transaction transaction, long accountId) {
        Account account = repo.getAccount(accountId);
        account.getTransactions().add(transaction);
        account.setBalance(account.getBalance() + transaction.getAmount());
        return repo.updateAccountDetails(account);
    }
}
