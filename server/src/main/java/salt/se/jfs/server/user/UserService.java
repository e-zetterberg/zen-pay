package salt.se.jfs.server.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository repo;



    public UserService(UserRepository repo) {
        this.repo = repo;
    }
    public User getUserWithEmail(String email) {
        return repo.getUserWithEmail(email);
    }

    public User getUserWithId(Long id) {
        return repo.getUserWithId(id);
    }

    public User updateUserInfo(UserDto dto) {

        return repo.updateUserInfo(new User(dto));
    }
}
