package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "amenities_x_residences")
public class AmenitiesResidencesId {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "amenity_id")
    private int amenity_id;
    @Column(name = "residence_id")
    private int residence_id;
    @Column(name = "start_date")
    private int start_date;
    @Column(name = "end_date")
    private int end_date;

    public AmenitiesResidencesId(){
    }

    public AmenitiesResidencesId(int amenity_id, int residence_id, int start_date, int end_date) {
        this.amenity_id = amenity_id;
        this.residence_id = residence_id;
        this.start_date = start_date;
        this.end_date = end_date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAmenity_id() {
        return amenity_id;
    }

    public void setAmenity_id(int amenity_id) {
        this.amenity_id = amenity_id;
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
}
