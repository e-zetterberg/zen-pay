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
        Account sender = repo.getAccount(fromAccount);
        Account receiver = repo.getAccount(toAccount);
        receiver.getTransactions().add(transaction);
        transaction.setAmount(-transaction.getAmount());
        sender.getTransactions().add(transaction);

        return repo.saveAccounts(sender, receiver);
    }
}
