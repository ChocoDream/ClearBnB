package com.clearbnb.entities;
import javax.persistence.*;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "address_id")
    private int address_id;
    @Column(name = "rooms")
    private int rooms;
    @Column(name = "price")
    private int price;
    @Column(name = "max_guests")
    private int max_guests;

    public Residence(){
    }

    public Residence(int address_id, int price, int rooms, int max_guests) {
        this.address_id = address_id;
        this.price = price;
        this.rooms = rooms;
        this.max_guests = max_guests;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAddress_id() {
        return address_id;
    }

    public void setAddress_id(int address_id) {
        this.address_id = address_id;
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

    public int getMax_guests() {
        return max_guests;
    }

    public void setMax_guests(int max_guests) {
        this.max_guests = max_guests;
    }

}
