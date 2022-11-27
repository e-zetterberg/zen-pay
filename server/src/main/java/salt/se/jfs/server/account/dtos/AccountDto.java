package salt.se.jfs.server.account.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record AccountDto(long accountId, double balance,
                         List<TransactionDto> transactions) {
}