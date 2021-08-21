package com.hugos.hm.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="locations")
@SQLDelete(sql = "UPDATE locations SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Location {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String shortName;
    private String address;
    private boolean isForHouse;
    private boolean isForArtwork;

    @Column(name="deleted")
    private boolean deleted = false;


    public Location() {}

    public Location(Long id) {
        this.id = id;
    }

    public Location(Long id,
                    String name,
                    String shortName,
                    String address,
                    boolean isForHouse,
                    boolean isForArtwork) {
        this.id = id;
        this.name = name;
        this.shortName = shortName;
        this.address = address;
        this.isForHouse = isForHouse;
        this.isForArtwork = isForArtwork;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean getIsForHouse() {
        return isForHouse;
    }

    public void setIsForHouse(boolean isForHouse) {
        this.isForHouse = isForHouse;
    }

    public boolean getIsForArtwork() {
        return isForArtwork;
    }

    public void setIsForArtwork(boolean isForArtwork) {
        this.isForArtwork = isForArtwork;
    }

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", shortName='" + shortName + '\'' +
                ", address='" + address + '\'' +
                ", isForHouse=" + isForHouse +
                ", isForArtwork=" + isForArtwork +
                ", deleted=" + deleted +
                '}';
    }
}
