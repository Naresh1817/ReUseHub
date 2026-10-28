package com.reusehub.modules.request.service;

import com.reusehub.modules.request.dto.ClaimCreateRequest;
import com.reusehub.modules.request.dto.ClaimResponse;
import com.reusehub.modules.request.entity.RequestStatus;

import java.util.List;

public interface ItemRequestService {
    ClaimResponse submitClaim(Long itemId, ClaimCreateRequest request, String userEmail);
    List<ClaimResponse> getIncomingClaims(String userEmail);
    List<ClaimResponse> getOutgoingClaims(String userEmail);
    ClaimResponse updateClaimStatus(Long requestId, RequestStatus newStatus, String userEmail);
}

