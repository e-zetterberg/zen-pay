package salt.se.jfs.server.User;

import org.springframework.stereotype.Service;
import salt.se.jfs.server.Accounts.Account;
import salt.se.jfs.server.Accounts.AccountsRepository;

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

}
