package com.reusehub.modules.item.controller;

import com.reusehub.common.response.ApiResponse;
import com.reusehub.modules.item.dto.ItemCreateRequest;
import com.reusehub.modules.item.dto.ItemResponse;
import com.reusehub.modules.item.dto.ItemSearchCriteria;
import com.reusehub.modules.item.dto.StatusUpdateRequest;
import com.reusehub.modules.item.entity.ItemStatus;
import com.reusehub.modules.item.entity.ListingType;
import com.reusehub.modules.item.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<ItemResponse>>> getItems(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) ListingType type,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) ItemStatus status,
            @PageableDefault(size = 12, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable
    ) {
        ItemSearchCriteria criteria = new ItemSearchCriteria(category, type, search, status);
        Page<ItemResponse> items = itemService.getItems(criteria, pageable);
        return ResponseEntity.ok(ApiResponse.success(items));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ItemResponse>> getItemById(@PathVariable Long id) {
        ItemResponse item = itemService.getItemById(id);
        return ResponseEntity.ok(ApiResponse.success(item));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ItemResponse>> createItem(
            @Valid @RequestBody ItemCreateRequest request,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        ItemResponse created = itemService.createItem(request, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(created, "Listing created successfully"));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<ItemResponse>> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusUpdateRequest request,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        ItemResponse updated = itemService.updateItemStatus(id, request.status(), userDetails.getUsername());
        return ResponseEntity.ok(ApiResponse.success(updated, "Item status updated"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        itemService.deleteItem(id, userDetails.getUsername());
        return ResponseEntity.noContent().build();
    }
}

