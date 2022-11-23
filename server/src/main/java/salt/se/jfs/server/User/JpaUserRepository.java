package salt.se.jfs.server.User;

import org.springframework.data.repository.CrudRepository;
import salt.se.jfs.server.Accounts.Account;

import java.util.Optional;

public interface JpaUserRepository extends CrudRepository<User,Long> {

    Optional<User> findUserByEmail(String email);
}
