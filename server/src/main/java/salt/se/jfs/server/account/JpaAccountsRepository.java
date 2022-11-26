package salt.se.jfs.server.account;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface JpaAccountsRepository extends CrudRepository<Account, Long> {

    Optional<Account> findAccountByUser_UserId(long id);

}
