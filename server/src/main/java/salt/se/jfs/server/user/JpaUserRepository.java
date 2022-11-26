package salt.se.jfs.server.user;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface JpaUserRepository extends CrudRepository<User,Long> {

    Optional<User> findUserByEmail(String email);
}
