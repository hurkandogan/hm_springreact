package com.hugos.hm.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="locations")
public class Location {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String shortName;
    private String address;
    @OneToMany(mappedBy = "location")
    private Set<Invoice> invoices;

    public Location() {}

    public Location(Long id) {
        this.id = id;
    }

    public Location(String name,
                    String shortName,
                    String address) {
        this.name = name;
        this.shortName = shortName;
        this.address = address;
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

    public void setAddress(String adress) {
        this.address = adress;
    }

    public Set<Invoice> getInvoices() {
        return invoices;
    }

    public void setInvoices(Set<Invoice> invoices) {
        this.invoices = invoices;
    }
}
