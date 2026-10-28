package com.reusehub.modules.auth.service;

import com.reusehub.modules.auth.dto.AuthResponse;
import com.reusehub.modules.auth.dto.LoginRequest;
import com.reusehub.modules.auth.dto.RegisterRequest;
import com.reusehub.modules.auth.dto.UserSummaryDto;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    UserSummaryDto getCurrentUser(String email);
}

