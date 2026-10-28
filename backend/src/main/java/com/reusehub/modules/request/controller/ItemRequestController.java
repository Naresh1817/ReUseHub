package com.reusehub.modules.request.controller;

import com.reusehub.common.response.ApiResponse;
import com.reusehub.modules.request.dto.ClaimCreateRequest;
import com.reusehub.modules.request.dto.ClaimResponse;
import com.reusehub.modules.request.dto.ClaimStatusUpdateRequest;
import com.reusehub.modules.request.service.ItemRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemRequestController {

    private final ItemRequestService requestService;

    public ItemRequestController(ItemRequestService requestService) {
        this.requestService = requestService;
    }

    @PostMapping("/items/{itemId}/requests")
    public ResponseEntity<ApiResponse<ClaimResponse>> submitClaim(
            @PathVariable Long itemId,
            @Valid @RequestBody ClaimCreateRequest request,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        ClaimResponse claim = requestService.submitClaim(itemId, request, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(claim, "Claim request submitted successfully"));
    }

    @GetMapping("/requests/incoming")
    public ResponseEntity<ApiResponse<List<ClaimResponse>>> getIncomingClaims(
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        List<ClaimResponse> claims = requestService.getIncomingClaims(userDetails.getUsername());
        return ResponseEntity.ok(ApiResponse.success(claims));
    }

    @GetMapping("/requests/outgoing")
    public ResponseEntity<ApiResponse<List<ClaimResponse>>> getOutgoingClaims(
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        List<ClaimResponse> claims = requestService.getOutgoingClaims(userDetails.getUsername());
        return ResponseEntity.ok(ApiResponse.success(claims));
    }

    @PatchMapping("/requests/{requestId}/status")
    public ResponseEntity<ApiResponse<ClaimResponse>> updateClaimStatus(
            @PathVariable Long requestId,
            @Valid @RequestBody ClaimStatusUpdateRequest request,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        ClaimResponse updated = requestService.updateClaimStatus(requestId, request.status(), userDetails.getUsername());
        return ResponseEntity.ok(ApiResponse.success(updated, "Claim status updated successfully"));
    }
}

