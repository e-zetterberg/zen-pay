package salt.se.jfs.server.account;

import salt.se.jfs.server.user.User;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Entity
public class Account {
    @Id
    @Column(name = "account_id")
    long accountId;

    double balance;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_acc_id", referencedColumnName = "account_id")
    private List<Transaction> transactions;

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Account(){

    }
    public Account(double balance) {
        this.accountId = random();
        this.balance = balance;
        this.transactions = new ArrayList<>();
    }

    public static long  random() {
        /* return a random long of 16 length */
        long smallest = 1000_0000_0000_0000L;
        long biggest =  9999_9999_9999_9999L;

        // return a long between smallest and biggest (+1 to include biggest as well with the upper bound)
        return ThreadLocalRandom.current().nextLong(smallest, biggest+1);
    }

    public void addTransaction(Transaction transaction){
        transactions.add(transaction);
        setBalance(getBalance() + transaction.getAmount());
    }

}
