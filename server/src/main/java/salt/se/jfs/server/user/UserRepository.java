package salt.se.jfs.server.user;

import org.springframework.stereotype.Repository;
@Repository
public class UserRepository {

    JpaUserRepository userRepo;

    public UserRepository(JpaUserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User getUserWithEmail(String email) {
        return userRepo.findUserByEmail(email).orElseThrow();
    }


    public User getUserWithId(Long id) {
        return userRepo.findById(id).orElseThrow();
    }


    public User saveUser(User user) {
        return userRepo.save(user);
    }
}
