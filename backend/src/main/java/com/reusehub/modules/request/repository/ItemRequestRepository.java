package com.reusehub.modules.request.repository;

import com.reusehub.modules.request.entity.ItemRequest;
import com.reusehub.modules.request.entity.RequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRequestRepository extends JpaRepository<ItemRequest, Long> {
    List<ItemRequest> findByRequesterIdOrderByCreatedAtDesc(Long requesterId);
    List<ItemRequest> findByItemOwnerIdOrderByCreatedAtDesc(Long ownerId);
    boolean existsByItemIdAndRequesterId(Long itemId, Long requesterId);
    List<ItemRequest> findByItemIdAndStatus(Long itemId, RequestStatus status);
}

