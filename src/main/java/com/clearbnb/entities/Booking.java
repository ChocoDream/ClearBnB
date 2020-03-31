package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "residence_id")
    private int residence_id;

    @Column(name = "start_date")
    private int start_date;

    @Column(name = "end_date")
    private int end_date;

    @Column(name = "time_stamp")
    private int time_stamp;

    @Column(name = "total_price")
    private int total_price;

    @Column(name = "is_active")
    private boolean is_active;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getResidence_id() {
        return residence_id;
    }

    public void setResidence_id(int residence_id) {
        this.residence_id = residence_id;
    }

    public int getStart_date() {
        return start_date;
    }

    public void setStart_date(int start_date) {
        this.start_date = start_date;
    }

    public int getEnd_date() {
        return end_date;
    }

    public void setEnd_date(int end_date) {
        this.end_date = end_date;
    }

    public int getTime_stamp() {
        return time_stamp;
    }

    public void setTime_stamp(int time_stamp) {
        this.time_stamp = time_stamp;
    }

    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }
}
