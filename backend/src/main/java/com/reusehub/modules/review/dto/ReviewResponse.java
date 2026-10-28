package com.reusehub.modules.review.dto;

import com.reusehub.modules.review.entity.Review;

import java.time.Instant;

public record ReviewResponse(
    Long id,
    String reviewerName,
    int rating,
    String comment,
    Instant createdAt
) {
    public static ReviewResponse fromEntity(Review review) {
        return new ReviewResponse(
            review.getId(),
            review.getReviewer().getFullName(),
            review.getRating(),
            review.getComment(),
            review.getCreatedAt()
        );
    }
}

