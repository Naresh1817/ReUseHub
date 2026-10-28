package com.reusehub.modules.item.dto;

import com.reusehub.modules.item.entity.ItemCondition;
import com.reusehub.modules.item.entity.ListingType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.util.List;

public record ItemCreateRequest(
    @NotBlank(message = "Title is required")
    @Size(max = 200, message = "Title cannot exceed 200 characters")
    String title,

    @NotBlank(message = "Description is required")
    String description,

    @NotBlank(message = "Category is required")
    String category,

    @NotNull(message = "Listing type is required")
    ListingType listingType,

    BigDecimal price,

    @NotNull(message = "Item condition is required")
    ItemCondition itemCondition,

    @NotBlank(message = "Pickup location is required")
    String pickupLocation,

    List<String> images
) {}

