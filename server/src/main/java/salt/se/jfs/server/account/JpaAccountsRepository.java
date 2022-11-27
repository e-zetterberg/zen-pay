package salt.se.jfs.server.account;

import org.springframework.data.repository.CrudRepository;


public interface JpaAccountsRepository extends CrudRepository<Account, Long> {

}
