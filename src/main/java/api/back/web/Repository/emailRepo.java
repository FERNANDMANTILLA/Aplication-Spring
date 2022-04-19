package api.back.web.Repository;

import org.springframework.stereotype.Repository;

@Repository
public interface emailRepo extends org.springframework.data.mongodb.repository.MongoRepository<api.back.web.Entity.email, String> {
}


