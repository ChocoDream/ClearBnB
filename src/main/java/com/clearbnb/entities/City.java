package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "city_list")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int value;

    @Column(name = "city")
    private String label;

    /*@Column(name = "country")
    private String country;

    @Column(name = "region")
    private String region;*/

    public int getValue() {
        return value;
    }

    public String getLabel() {
        return label;
    }

    /*public String getCountry() {
        return country;
    }

    public String getRegion() {
        return region;
    }*/
}
