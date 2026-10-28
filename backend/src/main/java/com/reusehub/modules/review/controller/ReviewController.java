package com.reusehub.modules.review.controller;

import com.reusehub.common.response.ApiResponse;
import com.reusehub.modules.review.dto.ReviewCreateRequest;
import com.reusehub.modules.review.dto.ReviewResponse;
import com.reusehub.modules.review.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/reviews")
    public ResponseEntity<ApiResponse<ReviewResponse>> submitReview(
            @Valid @RequestBody ReviewCreateRequest request,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        ReviewResponse review = reviewService.submitReview(request, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(review, "Feedback submitted successfully"));
    }

    @GetMapping("/users/{userId}/reviews")
    public ResponseEntity<ApiResponse<List<ReviewResponse>>> getUserReviews(@PathVariable Long userId) {
        List<ReviewResponse> reviews = reviewService.getReviewsForUser(userId);
        return ResponseEntity.ok(ApiResponse.success(reviews));
    }

    @GetMapping("/users/{userId}/rating")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getUserRating(@PathVariable Long userId) {
        Double avg = reviewService.getAverageRatingForUser(userId);
        return ResponseEntity.ok(ApiResponse.success(Map.of("userId", userId, "averageRating", avg)));
    }
}

