package salt.se.jfs.server.account;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.transaction.annotation.Transactional;
import salt.se.jfs.server.account.dtos.TransactionDto;

import javax.persistence.*;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "transaction_id")
    private long transactionId;
    private String description;
    private double amount;
    private String timeStamp;

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Transaction(){
    }

    public Transaction(TransactionDto dto){
        this.transactionId = dto.transactionId();
        this.description = dto.description();
        this.amount = dto.amount();
        this.timeStamp = dto.timeStamp();
    }

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
