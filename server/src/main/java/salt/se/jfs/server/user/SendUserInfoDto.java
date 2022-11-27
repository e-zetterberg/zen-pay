package salt.se.jfs.server.user;

public record SendUserInfoDto(
        long userId,
        String name,
        String zenName,
        String email,
        String phone,
        String address,
        String createdOn,
        long accountId
) {
    public SendUserInfoDto(User user) {
        this(user.getUserId(),
                user.getName(),
                user.getZenName(),
                user.getEmail(),
                user.getPhone(),
                user.getAddress(),
                user.getCreatedOn(),
                user.getAccount().getAccountId());
    }
}
