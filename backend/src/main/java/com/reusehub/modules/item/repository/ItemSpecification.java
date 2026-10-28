package com.reusehub.modules.item.repository;

import com.reusehub.modules.item.dto.ItemSearchCriteria;
import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.entity.ItemStatus;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class ItemSpecification {

    public static Specification<Item> filterBy(ItemSearchCriteria criteria) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (criteria == null) {
                return cb.conjunction();
            }

            // Category filter
            if (StringUtils.hasText(criteria.category()) && !"all".equalsIgnoreCase(criteria.category())) {
                predicates.add(cb.equal(cb.lower(root.get("category")), criteria.category().toLowerCase()));
            }

            // Listing type filter (DONATE, SELL, SWAP)
            if (criteria.type() != null) {
                predicates.add(cb.equal(root.get("listingType"), criteria.type()));
            }

            // Status filter (defaults to AVAILABLE if not specified)
            if (criteria.status() != null) {
                predicates.add(cb.equal(root.get("status"), criteria.status()));
            } else {
                // Show available items by default in public search
                predicates.add(root.get("status").in(ItemStatus.AVAILABLE, ItemStatus.RESERVED));
            }

            // Keyword text search across title, description, or pickup location
            if (StringUtils.hasText(criteria.search())) {
                String pattern = "%" + criteria.search().toLowerCase().trim() + "%";
                Predicate titleMatch = cb.like(cb.lower(root.get("title")), pattern);
                Predicate descMatch = cb.like(cb.lower(root.get("description")), pattern);
                Predicate locMatch = cb.like(cb.lower(root.get("pickupLocation")), pattern);
                predicates.add(cb.or(titleMatch, descMatch, locMatch));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}

