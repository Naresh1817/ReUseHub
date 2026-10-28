package com.reusehub.modules.item.dto;

import com.reusehub.modules.item.entity.ItemStatus;
import jakarta.validation.constraints.NotNull;

public record StatusUpdateRequest(
    @NotNull(message = "Status is required")
    ItemStatus status
) {}

