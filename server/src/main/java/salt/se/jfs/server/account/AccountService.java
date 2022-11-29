package salt.se.jfs.server.account;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.account.dtos.CardDto;
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

        Transaction received = new Transaction("Received from:" + sender.accountId, dto.amount(), dto.timeStamp());
        Transaction sent = new Transaction("Sent to:" + receiver.accountId, -dto.amount(), dto.timeStamp());

        receiver.addTransaction(received);
        sender.addTransaction(sent);

        return repo.saveAccounts(sender, receiver);
    }

    public Account getAccount(long accountId) {
        return repo.getAccount(accountId);
    }


    public CardDto updateCardDetailsToAccount(Account account) {
        Account updatedAccount = repo.saveAccount(account);
        return new CardDto(updatedAccount.getCards().get(0));
    }
}
