package com.hugos.hm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name="artworks")
public class Artwork {
    @Id
    @GeneratedValue
    private Long id;
    private String artist;
    private Date dataOfPurchase;
    private String description;
    private boolean framing;
    private String imageLink;
    private String locationOfPurchase;
    private String name;
    private double price;
    private String size;
    private double tax;
    private double transport;

    public Artwork() {}

    public Artwork(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public Date getDataOfPurchase() {
        return dataOfPurchase;
    }

    public void setDataOfPurchase(Date dataOfPurchase) {
        this.dataOfPurchase = dataOfPurchase;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isFraming() {
        return framing;
    }

    public void setFraming(boolean framing) {
        this.framing = framing;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getLocationOfPurchase() {
        return locationOfPurchase;
    }

    public void setLocationOfPurchase(String locationOfPurchase) {
        this.locationOfPurchase = locationOfPurchase;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getTransport() {
        return transport;
    }

    public void setTransport(double transport) {
        this.transport = transport;
    }
}
