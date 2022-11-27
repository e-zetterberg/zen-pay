package salt.se.jfs.server.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import salt.se.jfs.server.account.Account;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private long userId;
    private String name;
    private String zenName;
    private String email;
    private String phone;

    @Column(columnDefinition="TEXT", length = 300)
    private String address;
    private String createdOn;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_acc_id", referencedColumnName = "account_id")
    private Account account;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
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


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public String getZenName() {
        return zenName;
    }

    public void setZenName(String zenName) {
        this.zenName = zenName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User(){

    }
    public User(UserDto dto, Account account) {
        this.userId = dto.userId();
        this.name = dto.name();
        this.zenName = dto.zenName();
        this.email = dto.email();
        this.phone = dto.phone();
        this.address = dto.address();
        this.createdOn = dto.createdOn();
        this.account = account;
    }

    public User(UserDto dto) {
        this.userId = dto.userId();
        this.name = dto.name();
        this.zenName = dto.zenName();
        this.email = dto.email();
        this.phone = dto.phone();
        this.address = dto.address();
        this.createdOn = dto.createdOn();
    }
}
