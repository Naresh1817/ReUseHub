package com.reusehub.modules.item.service;

import com.reusehub.modules.item.dto.ItemCreateRequest;
import com.reusehub.modules.item.dto.ItemResponse;
import com.reusehub.modules.item.dto.ItemSearchCriteria;
import com.reusehub.modules.item.entity.ItemStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ItemService {
    Page<ItemResponse> getItems(ItemSearchCriteria criteria, Pageable pageable);
    ItemResponse getItemById(Long id);
    ItemResponse createItem(ItemCreateRequest request, String userEmail);
    ItemResponse updateItemStatus(Long id, ItemStatus status, String userEmail);
    void deleteItem(Long id, String userEmail);
}

