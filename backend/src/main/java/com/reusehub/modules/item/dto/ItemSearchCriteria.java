package com.reusehub.modules.item.dto;

import com.reusehub.modules.item.entity.ItemStatus;
import com.reusehub.modules.item.entity.ListingType;

public record ItemSearchCriteria(
    String category,
    ListingType type,
    String search,
    ItemStatus status
) {}

