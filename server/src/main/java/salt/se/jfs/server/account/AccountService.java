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
        if (account.getBalance() < dto.amount() && dto.description().equals("withdraw")){
            throw new IllegalArgumentException();
        }
        account.addTransaction(new Transaction(dto));
        return repo.saveAccount(account);
    }

    public Account transferMoney(TransactionDto dto, long fromAccount, long toAccount) {
        Account sender = repo.getAccount(fromAccount);
        if (sender.getBalance() < dto.amount()){
            throw new IllegalArgumentException();
        }
        Account receiver = repo.getAccount(toAccount);

        Transaction received = new Transaction("Received from:" + sender.accountId, dto.amount(), dto.timeStamp());
        Transaction sent = new Transaction("Sent to:" + receiver.accountId, -dto.amount(), dto.timeStamp());

        receiver.addTransaction(received);
        sender.addTransaction(sent);

        return repo.saveAccounts(sender, receiver);
    }

    public Account getAccount(long accountId) {
        return repo.getAccount(accountId);
    }


}
