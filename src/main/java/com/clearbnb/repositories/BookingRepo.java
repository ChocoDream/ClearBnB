package com.clearbnb.repositories;

import com.clearbnb.entities.Booking;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepo extends CrudRepository<Booking, Integer> {

    public Booking findById(int id);

    public static final String FIND_BOOKINGBYRESIDENCEID = "SELECT b.id, b.user_id, " +
            "                                                      b.residence_id, b.start_date, b.end_date, " +
            "                                                      b.time_stamp, b.total_price, b.is_active\n" +
            "                                                 FROM bookings b\n" +
            "                                                WHERE b.residence_id = :residence_id" +
            "                                             Order by start_date";
    @Query(value = FIND_BOOKINGBYRESIDENCEID, nativeQuery = true)
    public List<Booking> findByResidenceId(int residence_id);
}
