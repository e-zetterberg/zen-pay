package salt.se.jfs.server.Accounts;

import salt.se.jfs.server.Customer.Customer;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "account_id")
    long accountId;
    @Column(name = "balance")
    double balance;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_cust_id")
    Customer customer;
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
        this.balance = 0;
        this.customer = new Customer();
        this.transactions = new ArrayList<>();
    }

    @Override
    public String toString() {
        return "Accounts{" +
                "accountId=" + accountId +
                ", balance=" + balance +
                ", transactions=" + transactions +
                '}';
    }
}
