package salt.se.jfs.server.account.dtos;

/*
 ** Swetha
 ** 2022-11-28
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import salt.se.jfs.server.account.Card;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CardDto(
        Long cardNum,
        String cardHolder,
        String expireMonth,
        String expireYear
) {
    public CardDto(Card card) {
        this(card.getCardNum(), card.getCardHolder(), card.getExpireMonth(), card.getCardHolder());
    }
}
