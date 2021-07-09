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
    private String adress;
    @OneToMany(mappedBy = "location")
    private Set<Invoice> invoices;

    public Location() {}

    public Location(Long id) {
        this.id = id;
    }

    public Location(String name,
                    String shortName,
                    String adress) {
        this.name = name;
        this.shortName = shortName;
        this.adress = adress;
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

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public Set<Invoice> getInvoices() {
        return invoices;
    }

    public void setInvoices(Set<Invoice> invoices) {
        this.invoices = invoices;
    }
}
