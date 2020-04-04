package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "city_list")
public class CityInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int value;

    @Column(name = "city")
    private String label;

    public int getValue() {
        return value;
    }

    public String getLabel() {
        return label;
    }
}
