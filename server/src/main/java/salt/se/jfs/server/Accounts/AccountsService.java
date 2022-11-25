package salt.se.jfs.server.Accounts;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.User.User;

@Service
public class AccountsService {

    AccountsRepository repo;

    public AccountsService(AccountsRepository repo) {
        this.repo = repo;
    }

    public Account getDetails(long userId) {
        return repo.getAccountDetails(userId);
    }

    public Account createAccount(User user){
        return repo.createAccount(user);
    }

    public Account updateAccount(Transaction transaction, long accountId) {
        Account account = repo.getAccount(accountId);
        account.getTransactions().add(transaction);
        account.setBalance(account.getBalance() + transaction.getAmount());
        return repo.updateAccountDetails(account);
    }

    public Account transferMoney(Transaction transaction, long fromAccount, long toAccount) {
        updateAccount(transaction, toAccount);
        transaction.setAmount(-transaction.getAmount());
        return updateAccount(transaction, fromAccount);
    }
}
