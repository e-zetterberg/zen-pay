package salt.se.jfs.server.user;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record UserDto(
        long userId,
        String name,
        String zenName,
        String email,
        String phone,
        String address,
        String createdOn) {
}