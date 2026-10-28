package com.reusehub.modules.request.service;

import com.reusehub.common.exception.BadRequestException;
import com.reusehub.common.exception.ResourceNotFoundException;
import com.reusehub.common.exception.UnauthorizedActionException;
import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.entity.ItemStatus;
import com.reusehub.modules.item.repository.ItemRepository;
import com.reusehub.modules.request.dto.ClaimCreateRequest;
import com.reusehub.modules.request.dto.ClaimResponse;
import com.reusehub.modules.request.entity.ItemRequest;
import com.reusehub.modules.request.entity.RequestStatus;
import com.reusehub.modules.request.repository.ItemRequestRepository;
import com.reusehub.modules.user.entity.User;
import com.reusehub.modules.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ItemRequestServiceImpl implements ItemRequestService {

    private final ItemRequestRepository requestRepository;
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;

    public ItemRequestServiceImpl(
            ItemRequestRepository requestRepository,
            ItemRepository itemRepository,
            UserRepository userRepository
    ) {
        this.requestRepository = requestRepository;
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public ClaimResponse submitClaim(Long itemId, ClaimCreateRequest request, String userEmail) {
        User requester = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Item", "id", itemId));

        // Validation 1: Cannot request own item
        if (item.getOwner().getId().equals(requester.getId())) {
            throw new BadRequestException("You cannot request or claim your own listing.");
        }

        // Validation 2: Item must be available
        if (item.getStatus() != ItemStatus.AVAILABLE) {
            throw new BadRequestException("This item is currently " + item.getStatus() + " and cannot accept new claims.");
        }

        // Validation 3: Duplicate active check
        if (requestRepository.existsByItemIdAndRequesterId(itemId, requester.getId())) {
            throw new BadRequestException("You have already submitted an active claim request for this item.");
        }

        ItemRequest itemRequest = new ItemRequest(item, requester, request.message());
        ItemRequest saved = requestRepository.save(itemRequest);

        return ClaimResponse.fromEntity(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClaimResponse> getIncomingClaims(String userEmail) {
        User owner = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        return requestRepository.findByItemOwnerIdOrderByCreatedAtDesc(owner.getId())
                .stream()
                .map(ClaimResponse::fromEntity)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClaimResponse> getOutgoingClaims(String userEmail) {
        User requester = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        return requestRepository.findByRequesterIdOrderByCreatedAtDesc(requester.getId())
                .stream()
                .map(ClaimResponse::fromEntity)
                .toList();
    }

    @Override
    @Transactional
    public ClaimResponse updateClaimStatus(Long requestId, RequestStatus newStatus, String userEmail) {
        User owner = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        ItemRequest claim = requestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("ClaimRequest", "id", requestId));

        Item item = claim.getItem();

        // Security check: Only the item's owner can accept or decline inquiries
        if (!item.getOwner().getId().equals(owner.getId())) {
            throw new UnauthorizedActionException("Only the listing owner can respond to this claim.");
        }

        claim.setStatus(newStatus);

        // State Machine Transition
        if (newStatus == RequestStatus.ACCEPTED) {
            // Reserve the item atomically
            item.setStatus(ItemStatus.RESERVED);
            itemRepository.save(item);

            // Automatically decline other pending claims for this item
            List<ItemRequest> others = requestRepository.findByItemIdAndStatus(item.getId(), RequestStatus.PENDING);
            for (ItemRequest other : others) {
                if (!other.getId().equals(claim.getId())) {
                    other.setStatus(RequestStatus.REJECTED);
                    requestRepository.save(other);
                }
            }
        } else if (newStatus == RequestStatus.REJECTED && item.getStatus() == ItemStatus.RESERVED) {
            // If the accepted claim is later rejected/cancelled, free the item back up
            item.setStatus(ItemStatus.AVAILABLE);
            itemRepository.save(item);
        }

        ItemRequest updated = requestRepository.save(claim);
        return ClaimResponse.fromEntity(updated);
    }
}

