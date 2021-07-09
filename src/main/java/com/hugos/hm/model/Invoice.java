package com.hugos.hm.model;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="invoices")
public class Invoice {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Location location;
    private Date date;
    private String firm;
    private String description;
    private double price;
    private String invoiceLink;

    public Invoice() {}

    public Invoice(Long id) {
        this.id = id;
    }

    public Invoice(Long id,
                   Location location,
                   Date date,
                   double price) {
        this.id = id;
        this.location = location;
        this.date = date;
        this.price = price;
    }

    public Invoice(Long id,
                   Location location,
                   Date date,
                   String firm,
                   String description,
                   double price,
                   String invoiceLink) {
        this.id = id;
        this.location = location;
        this.date = date;
        this.firm = firm;
        this.description = description;
        this.price = price;
        this.invoiceLink = invoiceLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getFirm() {
        return firm;
    }

    public void setFirm(String firm) {
        this.firm = firm;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getInvoiceLink() {
        return invoiceLink;
    }

    public void setInvoiceLink(String invoiceLink) {
        this.invoiceLink = invoiceLink;
    }
}
