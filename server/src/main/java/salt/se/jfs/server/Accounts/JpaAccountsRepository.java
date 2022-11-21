package salt.se.jfs.server.Accounts;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface JpaAccountsRepository extends CrudRepository<Account, Long> {

    Optional<Account> findAccountByCustomer_CustomerId(long id);

}
