package salt.se.jfs.server.Customer;

import salt.se.jfs.server.Accounts.Account;

import javax.persistence.*;

@Entity
public class Customer {

    @Id

    @Column(name = "customer_id")
    private long customerId;

    private String name;


    @OneToOne(mappedBy = "customer")
    private Account account;

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", name='" + name + '\'' +
                ", account=" + account +
                '}';
    }
}
