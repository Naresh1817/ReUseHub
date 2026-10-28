package com.reusehub.modules.request.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ClaimCreateRequest(
    @NotBlank(message = "Message or pickup proposal is required")
    @Size(max = 500, message = "Message cannot exceed 500 characters")
    String message
) {}

