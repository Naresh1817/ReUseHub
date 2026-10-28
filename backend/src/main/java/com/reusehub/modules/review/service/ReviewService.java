package com.reusehub.modules.review.service;

import com.reusehub.modules.review.dto.ReviewCreateRequest;
import com.reusehub.modules.review.dto.ReviewResponse;

import java.util.List;

public interface ReviewService {
    ReviewResponse submitReview(ReviewCreateRequest request, String reviewerEmail);
    List<ReviewResponse> getReviewsForUser(Long userId);
    Double getAverageRatingForUser(Long userId);
}

