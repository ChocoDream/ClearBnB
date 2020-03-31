package com.clearbnb.controllers;
import com.clearbnb.entities.Booking;
import com.clearbnb.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {
    @Autowired
    BookingService bookingService;

    @GetMapping("/api/clearbnb/bookings")
    public List<Booking> getAllBookings(){
        return bookingService.findAllBookings();
    }

    @GetMapping("/api/clearbnb/bookings/{id}")
    public Booking getOneBooking(@PathVariable int id) {
        return bookingService.getOneBooking(id);
    }

    @GetMapping("/api/clearbnb/bookingsByResidenceId/{residence_id}")
    public List<Booking> getAllBookingsByResidenceId(@PathVariable int residence_id) {
        return bookingService.getAllBookingsByResidenceId(residence_id);
    }
}
