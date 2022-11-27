package salt.se.jfs.server.account;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.account.dtos.TransactionDto;
import salt.se.jfs.server.user.User;
import salt.se.jfs.server.user.UserDto;

@Service
public class AccountsService {

    AccountsRepository repo;

    public AccountsService(AccountsRepository repo) {
        this.repo = repo;
    }

    public Account getAccountForUser(long userId) {
        return repo.getAccountDetails(userId);
    }

    public Account createAccount(UserDto dto){
        return repo.createAccount(new User(dto));
    }

    public Account updateAccount(Transaction transaction, long accountId) {
        Account account = repo.getAccount(accountId);
        account.getTransactions().add(transaction);
        account.setBalance(account.getBalance() + transaction.getAmount());
        return repo.updateAccountDetails(account);
    }

    public Account transferMoney(TransactionDto dto, long fromAccount, long toAccount) {
        Transaction transaction = new Transaction(dto);
        updateAccount(transaction, toAccount);
        transaction.setAmount(-transaction.getAmount());
        return updateAccount(transaction, fromAccount);
    }
}
