package com.reusehub.modules.review.service;

import com.reusehub.common.exception.BadRequestException;
import com.reusehub.common.exception.ResourceNotFoundException;
import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.repository.ItemRepository;
import com.reusehub.modules.review.dto.ReviewCreateRequest;
import com.reusehub.modules.review.dto.ReviewResponse;
import com.reusehub.modules.review.entity.Review;
import com.reusehub.modules.review.repository.ReviewRepository;
import com.reusehub.modules.user.entity.User;
import com.reusehub.modules.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final ItemRepository itemRepository;

    public ReviewServiceImpl(
            ReviewRepository reviewRepository,
            UserRepository userRepository,
            ItemRepository itemRepository
    ) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
    }

    @Override
    @Transactional
    public ReviewResponse submitReview(ReviewCreateRequest request, String reviewerEmail) {
        User reviewer = userRepository.findByEmail(reviewerEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", reviewerEmail));

        User targetUser = userRepository.findById(request.targetUserId())
                .orElseThrow(() -> new ResourceNotFoundException("TargetUser", "id", request.targetUserId()));

        if (reviewer.getId().equals(targetUser.getId())) {
            throw new BadRequestException("You cannot leave a review for yourself.");
        }

        Item item = null;
        if (request.itemId() != null) {
            item = itemRepository.findById(request.itemId()).orElse(null);
        }

        Review review = new Review(reviewer, targetUser, item, request.rating(), request.comment());
        Review saved = reviewRepository.save(review);

        return ReviewResponse.fromEntity(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ReviewResponse> getReviewsForUser(Long userId) {
        return reviewRepository.findByTargetUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(ReviewResponse::fromEntity)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public Double getAverageRatingForUser(Long userId) {
        return reviewRepository.calculateAverageRating(userId);
    }
}

