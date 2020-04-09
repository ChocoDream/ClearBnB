package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "start_date")
    private long start_date;

    @Column(name = "end_date")
    private long end_date;

    @Column(name = "time_stamp")
    private long time_stamp;

    @Column(name = "total_price")
    private int total_price;

    @Column(name = "total_guests")
    private int total_guests;

    @Column(name = "is_active")
    private boolean is_active;

    @OneToOne
    @JoinColumn(name = "user_id")
    User user;

    @OneToOne
    @JoinColumn(name = "residence_id")
    ResidenceInfo residenceInfo;

    public Booking(){}

    public Booking(int id, long start_date, long end_date, long time_stamp, int total_price, int total_guests, boolean is_active, User user, ResidenceInfo residenceInfo) {
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.time_stamp = time_stamp;
        this.total_price = total_price;
        this.total_guests = total_guests;
        this.is_active = is_active;
        this.user = user;
        this.residenceInfo = residenceInfo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getStart_date() {
        return start_date;
    }

    public void setStart_date(long start_date) {
        this.start_date = start_date;
    }

    public long getEnd_date() {
        return end_date;
    }

    public void setEnd_date(long end_date) {
        this.end_date = end_date;
    }

    public long getTime_stamp() {
        return time_stamp;
    }

    public void setTime_stamp(long time_stamp) {
        this.time_stamp = time_stamp;
    }

    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }

    public int getTotal_guests() {
        return total_guests;
    }

    public void setTotal_guests(int total_guests) {
        this.total_guests = total_guests;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }

    public ResidenceInfo getResidenceInfo() {
        return residenceInfo;
    }

    public void setResidenceInfo(ResidenceInfo residenceInfo) {
        this.residenceInfo = residenceInfo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
