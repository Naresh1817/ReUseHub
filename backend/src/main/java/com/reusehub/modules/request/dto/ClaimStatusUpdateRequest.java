package com.reusehub.modules.request.dto;

import com.reusehub.modules.request.entity.RequestStatus;
import jakarta.validation.constraints.NotNull;

public record ClaimStatusUpdateRequest(
    @NotNull(message = "Request status is required")
    RequestStatus status
) {}

