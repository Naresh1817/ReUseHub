package com.reusehub.modules.review.repository;

import com.reusehub.modules.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByTargetUserIdOrderByCreatedAtDesc(Long targetUserId);

    @Query("SELECT COALESCE(AVG(r.rating), 5.0) FROM Review r WHERE r.targetUser.id = :targetUserId")
    Double calculateAverageRating(@Param("targetUserId") Long targetUserId);
}

