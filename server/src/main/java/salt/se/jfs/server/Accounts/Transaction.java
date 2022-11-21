package salt.se.jfs.server.Accounts;

import javax.persistence.*;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "transaction_id")
    private long transactionId;
    private String description;
    private double amount;

    @Override
    public String toString() {
        return "Transaction{" +
                "transactionId=" + transactionId +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                '}';
    }

    public long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(long transactionId) {
        this.transactionId = transactionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
