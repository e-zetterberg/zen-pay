package salt.se.jfs.server.account.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record TransactionDto(
        long transactionId,
        String description,
        double amount,
        String timeStamp) {
}