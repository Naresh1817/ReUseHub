package com.reusehub.modules.auth.dto;

import com.reusehub.modules.user.entity.Role;
import com.reusehub.modules.user.entity.User;

public record UserSummaryDto(
    Long id,
    String email,
    String fullName,
    String communityTag,
    Role role
) {
    public static UserSummaryDto fromEntity(User user) {
        return new UserSummaryDto(
            user.getId(),
            user.getEmail(),
            user.getFullName(),
            user.getCommunityTag(),
            user.getRole()
        );
    }
}

