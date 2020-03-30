package com.clearbnb.entities;

import javax.persistence.*;

@Entity
@Table(name = "residences_info")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int price;
    private int rooms;
    private int max_guests;
   /* private int address_id;*/
    private String country;
    private String region;
    private String city;
    private int zip_code;
    private String street_name;
    private String street_number;

    public Residence(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public int getMax_guest() {
        return max_guests;
    }

    public void setMax_guest(int max_guests) {
        this.max_guests = max_guests;
    }

    /*public int getAddress_id() {
        return address_id;
    }*/

    /*public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }*/

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZip_code() {
        return zip_code;
    }

    public void setZip_code(int zip_code) {
        this.zip_code = zip_code;
    }

    public String getStreet_name() {
        return street_name;
    }

    public void setStreet_name(String street_name) {
        this.street_name = street_name;
    }

    public String getStreet_number() {
        return street_number;
    }

    public void setStreet_number(String street_number) {
        this.street_number = street_number;
    }
}