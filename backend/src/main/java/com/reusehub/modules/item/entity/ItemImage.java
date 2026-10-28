package com.reusehub.modules.item.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "item_images")
public class ItemImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 600)
    private String imageUrl;

    private boolean isPrimary = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    public ItemImage() {}

    public ItemImage(String imageUrl, boolean isPrimary, Item item) {
        this.imageUrl = imageUrl;
        this.isPrimary = isPrimary;
        this.item = item;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public boolean isPrimary() { return isPrimary; }
    public void setPrimary(boolean primary) { isPrimary = primary; }

    public Item getItem() { return item; }
    public void setItem(Item item) { this.item = item; }
}

