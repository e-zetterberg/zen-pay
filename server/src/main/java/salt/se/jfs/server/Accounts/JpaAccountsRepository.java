package salt.se.jfs.server.Accounts;

import org.springframework.data.repository.CrudRepository;

public interface JpaAccountsRepository extends CrudRepository<Account, Long> {

    Account findAccountByCustomer_CustomerId(long id);

}
