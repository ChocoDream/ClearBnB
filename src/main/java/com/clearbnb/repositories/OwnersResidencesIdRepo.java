package com.clearbnb.repositories;
import com.clearbnb.entities.OwnersResidencesId;
import com.clearbnb.entities.ResidenceInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OwnersResidencesIdRepo extends CrudRepository<OwnersResidencesId, Integer> {
    public OwnersResidencesId findById(int owner_id);


    public static final String FIND_OWNERSBYRESIDENCEID = "SELECT o.id,\n" +
            "           o.owner_id,\n" +
            "           o.residence_id,\n" +
            "           o.start_date,\n" +
            "           o.end_date\n" +
            "      FROM owners_x_residences o\n" +
            "     WHERE o.residence_id = :residence_id";
    @Query(value = FIND_OWNERSBYRESIDENCEID, nativeQuery = true)
    public List<OwnersResidencesId> findByResidenceId(int residence_id);
}
