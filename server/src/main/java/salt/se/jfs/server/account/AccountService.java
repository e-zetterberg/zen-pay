package salt.se.jfs.server.account;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.account.dtos.TransactionDto;


@Service
public class AccountService {

    AccountRepository repo;

    public AccountService(AccountRepository repo) {
        this.repo = repo;
    }

    public Account addTransactionToAccount(TransactionDto dto, long accountId) {
        Account account = getAccount(accountId);
        account.addTransaction(new Transaction(dto));
        return repo.saveAccount(account);
    }

    public Account transferMoney(TransactionDto dto, long fromAccount, long toAccount) {
        Account sender = repo.getAccount(fromAccount);
        Account receiver = repo.getAccount(toAccount);
        Transaction transaction = new Transaction(dto);

        receiver.addTransaction(transaction);
        transaction.setAmount(-transaction.getAmount());
        sender.addTransaction(transaction);
        return repo.saveAccounts(sender, receiver);
    }

    public Account getAccount(long accountId) {
        return repo.getAccount(accountId);
    }


}
