package salt.se.jfs.server.account;
/*
 ** Swetha
 ** 2022-11-28
 */

import salt.se.jfs.server.account.dtos.CardDto;

import javax.persistence.*;

@Entity
public class Card {

    @Id
    @Column(name = "card_num")
    private Long cardNum;
    @Column(name = "card_holder")
    private String cardHolder;
    @Column(name = "expire_month")
    private String expireMonth;
    @Column(name = "expire_year")
    private String expireYear;

    public Long getCardNum() {
        return cardNum;
    }

    public void setCardNum(Long cardNum) {
        this.cardNum = cardNum;
    }

    public String getCardHolder() {
        return cardHolder;
    }

    public void setCardHolder(String cardHolder) {
        this.cardHolder = cardHolder;
    }

    public String getExpireMonth() {
        return expireMonth;
    }

    public void setExpireMonth(String expireMonth) {
        this.expireMonth = expireMonth;
    }

    public String getExpireYear() {
        return expireYear;
    }

    public void setExpireYear(String expireYear) {
        this.expireYear = expireYear;
    }

    public Card(CardDto dto) {
        this.cardHolder = dto.cardHolder();
        this.cardNum = dto.cardNum();
        this.expireMonth = dto.expireMonth();
        this.expireYear = dto.expireYear();
    }

    public Card() {
    }
}
