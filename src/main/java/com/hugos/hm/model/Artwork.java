package com.hugos.hm.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="artworks")
@SQLDelete(sql = "UPDATE artworks SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Artwork {
    @Id
    @GeneratedValue
    private Long id;
    private String artistName;
    private Date purchaseDate;
    private String description;
    private String location;
    private double framing;
    private String imageLink;
    private String purchaseLocation;
    private String artworkName;
    private double price;
    private String sizes;
    private double taxPrice;
    private double transportPrice;
    private int folderNumber;
    private boolean arr = false;
    private String notes;
    private boolean artworkIsSold = false;

    @Column(name="deleted")
    private final boolean deleted = false;

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

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getFraming() {
        return framing;
    }

    public void setFraming(double framing) {
        this.framing = framing;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getPurchaseLocation() {
        return purchaseLocation;
    }

    public void setPurchaseLocation(String purchaseLocation) {
        this.purchaseLocation = purchaseLocation;
    }

    public String getArtworkName() {
        return artworkName;
    }

    public void setArtworkName(String artworkName) {
        this.artworkName = artworkName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSizes() {
        return sizes;
    }

    public void setSizes(String sizes) {
        this.sizes = sizes;
    }

    public double getTaxPrice() {
        return taxPrice;
    }

    public void setTaxPrice(double taxPrice) {
        this.taxPrice = taxPrice;
    }

    public double getTransportPrice() {
        return transportPrice;
    }

    public void setTransportPrice(double transportPrice) {
        this.transportPrice = transportPrice;
    }

    public boolean isArr() {
        return arr;
    }

    public void setArr(boolean arr) {
        this.arr = arr;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public boolean isArtworkIsSold() {
        return artworkIsSold;
    }

    public void setArtworkIsSold(boolean artworkIsSold) {
        this.artworkIsSold = artworkIsSold;
    }

    public int getFolderNumber() {
        return folderNumber;
    }

    public void setFolderNumber(int folderNumber) {
        this.folderNumber = folderNumber;
    }

    public boolean isDeleted() {
        return deleted;
    }

    @Override
    public String toString() {
        return "Artwork{" +
                "id=" + id +
                ", artistName='" + artistName + '\'' +
                ", purchaseDate=" + purchaseDate +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", framing=" + framing +
                ", imageLink='" + imageLink + '\'' +
                ", purchaseLocation='" + purchaseLocation + '\'' +
                ", artworkName='" + artworkName + '\'' +
                ", price=" + price +
                ", sizes='" + sizes + '\'' +
                ", taxPrice=" + taxPrice +
                ", transportPrice=" + transportPrice +
                ", arr=" + arr +
                ", notes='" + notes + '\'' +
                ", artworkIsSold='" + artworkIsSold + '\'' +
                '}';
    }
}
