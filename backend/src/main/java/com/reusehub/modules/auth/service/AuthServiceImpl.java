package com.reusehub.modules.auth.service;

import com.reusehub.common.exception.BadRequestException;
import com.reusehub.common.exception.ResourceNotFoundException;
import com.reusehub.modules.auth.dto.AuthResponse;
import com.reusehub.modules.auth.dto.LoginRequest;
import com.reusehub.modules.auth.dto.RegisterRequest;
import com.reusehub.modules.auth.dto.UserSummaryDto;
import com.reusehub.modules.user.entity.Role;
import com.reusehub.modules.user.entity.User;
import com.reusehub.modules.user.repository.UserRepository;
import com.reusehub.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    public AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtTokenProvider tokenProvider
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    @Override
    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new BadRequestException("An account with this email address already exists.");
        }

        User user = new User(
                request.email(),
                passwordEncoder.encode(request.password()),
                request.fullName(),
                request.communityTag() != null ? request.communityTag() : "Community Member",
                Role.ROLE_USER
        );

        User savedUser = userRepository.save(user);

        // Authenticate new user automatically
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );

        String jwt = tokenProvider.generateToken(authentication);
        return AuthResponse.of(jwt, UserSummaryDto.fromEntity(savedUser));
    }

    @Override
    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", request.email()));

        String jwt = tokenProvider.generateToken(authentication);
        return AuthResponse.of(jwt, UserSummaryDto.fromEntity(user));
    }

    @Override
    @Transactional(readOnly = true)
    public UserSummaryDto getCurrentUser(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
        return UserSummaryDto.fromEntity(user);
    }
}

