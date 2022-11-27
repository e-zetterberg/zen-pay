package salt.se.jfs.server.user;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.account.Account;

@Service
public class UserService {

    UserRepository userRepo;

    public UserService(UserRepository repo) {
        this.userRepo = repo;
    }

    public User getUserWithEmail(String email) {
        return userRepo.getUserWithEmail(email);
    }

    public User getUserWithId(Long id) {
        return userRepo.getUserWithId(id);
    }

    public User updateUserInfo(UserDto dto) {
        User user = getUserWithId(dto.userId());
        user.setName(dto.name());
        user.setAddress(dto.address());
        user.setEmail(dto.email());
        user.setPhone(dto.phone());
        user.setZenName(dto.zenName());
        return userRepo.saveUser(user);
    }

    public User createUser(UserDto dto) {
        return userRepo.saveUser(new User(dto,new Account(0)));
    }
}
