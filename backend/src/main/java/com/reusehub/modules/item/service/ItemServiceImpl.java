package com.reusehub.modules.item.service;

import com.reusehub.common.exception.ResourceNotFoundException;
import com.reusehub.common.exception.UnauthorizedActionException;
import com.reusehub.modules.item.dto.ItemCreateRequest;
import com.reusehub.modules.item.dto.ItemResponse;
import com.reusehub.modules.item.dto.ItemSearchCriteria;
import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.entity.ItemStatus;
import com.reusehub.modules.item.repository.ItemRepository;
import com.reusehub.modules.item.repository.ItemSpecification;
import com.reusehub.modules.user.entity.Role;
import com.reusehub.modules.user.entity.User;
import com.reusehub.modules.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final UserRepository userRepository;

    public ItemServiceImpl(ItemRepository itemRepository, UserRepository userRepository) {
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public Page<ItemResponse> getItems(ItemSearchCriteria criteria, Pageable pageable) {
        Specification<Item> spec = ItemSpecification.filterBy(criteria);
        return itemRepository.findAll(spec, pageable).map(ItemResponse::fromEntity);
    }

    @Override
    @Transactional(readOnly = true)
    public ItemResponse getItemById(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item", "id", id));
        return ItemResponse.fromEntity(item);
    }

    @Override
    @Transactional
    public ItemResponse createItem(ItemCreateRequest request, String userEmail) {
        User owner = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        Item item = new Item(
                request.title(),
                request.description(),
                request.category(),
                request.listingType(),
                request.price(),
                request.itemCondition(),
                request.pickupLocation(),
                owner
        );

        if (request.images() != null && !request.images().isEmpty()) {
            for (int i = 0; i < request.images().size(); i++) {
                item.addImage(request.images().get(i), i == 0);
            }
        }

        Item savedItem = itemRepository.save(item);
        return ItemResponse.fromEntity(savedItem);
    }

    @Override
    @Transactional
    public ItemResponse updateItemStatus(Long id, ItemStatus status, String userEmail) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item", "id", id));

        verifyOwnership(item, userEmail);
        item.setStatus(status);
        Item updated = itemRepository.save(item);
        return ItemResponse.fromEntity(updated);
    }

    @Override
    @Transactional
    public void deleteItem(Long id, String userEmail) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item", "id", id));

        verifyOwnership(item, userEmail);
        itemRepository.delete(item);
    }

    private void verifyOwnership(Item item, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));

        boolean isOwner = item.getOwner().getId().equals(user.getId());
        boolean isAdmin = user.getRole() == Role.ROLE_ADMIN;

        if (!isOwner && !isAdmin) {
            throw new UnauthorizedActionException("You do not have permission to modify this listing.");
        }
    }
}

