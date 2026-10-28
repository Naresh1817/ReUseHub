package com.reusehub.modules.request.dto;

import com.reusehub.modules.auth.dto.UserSummaryDto;
import com.reusehub.modules.request.entity.ItemRequest;
import com.reusehub.modules.request.entity.RequestStatus;

import java.time.Instant;

public record ClaimResponse(
    Long id,
    Long itemId,
    String itemTitle,
    String itemImageUrl,
    UserSummaryDto requester,
    String message,
    RequestStatus status,
    Instant createdAt
) {
    public static ClaimResponse fromEntity(ItemRequest request) {
        String firstImage = request.getItem().getImages().isEmpty()
                ? null
                : request.getItem().getImages().get(0).getImageUrl();

        return new ClaimResponse(
            request.getId(),
            request.getItem().getId(),
            request.getItem().getTitle(),
            firstImage,
            UserSummaryDto.fromEntity(request.getRequester()),
            request.getMessage(),
            request.getStatus(),
            request.getCreatedAt()
        );
    }
}

