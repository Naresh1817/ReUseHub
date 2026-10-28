package com.reusehub.modules.auth.dto;

public record AuthResponse(
    String token,
    String tokenType,
    UserSummaryDto user
) {
    public static AuthResponse of(String token, UserSummaryDto user) {
        return new AuthResponse(token, "Bearer", user);
    }
}

