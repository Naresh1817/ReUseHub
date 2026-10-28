package com.reusehub.modules.item.dto;

import com.reusehub.modules.auth.dto.UserSummaryDto;
import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.entity.ItemCondition;
import com.reusehub.modules.item.entity.ItemImage;
import com.reusehub.modules.item.entity.ItemStatus;
import com.reusehub.modules.item.entity.ListingType;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

public record ItemResponse(
    Long id,
    String title,
    String description,
    String category,
    ListingType listingType,
    BigDecimal price,
    ItemCondition itemCondition,
    ItemStatus status,
    String pickupLocation,
    List<String> images,
    UserSummaryDto seller,
    Instant createdAt
) {
    public static ItemResponse fromEntity(Item item) {
        List<String> imageUrls = item.getImages().stream()
                .map(ItemImage::getImageUrl)
                .toList();

        return new ItemResponse(
            item.getId(),
            item.getTitle(),
            item.getDescription(),
            item.getCategory(),
            item.getListingType(),
            item.getPrice(),
            item.getItemCondition(),
            item.getStatus(),
            item.getPickupLocation(),
            imageUrls,
            UserSummaryDto.fromEntity(item.getOwner()),
            item.getCreatedAt()
        );
    }
}

