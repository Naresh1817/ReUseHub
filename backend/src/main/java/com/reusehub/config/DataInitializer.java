package com.reusehub.config;

import com.reusehub.modules.item.entity.Item;
import com.reusehub.modules.item.entity.ItemCondition;
import com.reusehub.modules.item.entity.ListingType;
import com.reusehub.modules.item.repository.ItemRepository;
import com.reusehub.modules.user.entity.Role;
import com.reusehub.modules.user.entity.User;
import com.reusehub.modules.user.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;

@Configuration
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ItemRepository itemRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            UserRepository userRepository,
            ItemRepository itemRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            // Seed Demo User
            User demoUser = new User(
                    "demo@reusehub.com",
                    passwordEncoder.encode("password123"),
                    "Alex Rivera",
                    "Downtown Maplewood",
                    Role.ROLE_USER
            );
            userRepository.save(demoUser);

            // Seed Demo Admin
            User adminUser = new User(
                    "admin@reusehub.com",
                    passwordEncoder.encode("admin123"),
                    "ReUseHub Admin",
                    "City Core",
                    Role.ROLE_ADMIN
            );
            userRepository.save(adminUser);

            // Seed Initial Item
            Item item1 = new Item(
                    "Solid Wood Mid-Century Coffee Table",
                    "Sturdy oak coffee table in excellent condition. Downsizing our living room so looking to pass it along to a good home.",
                    "home",
                    ListingType.SELL,
                    new BigDecimal("35.00"),
                    ItemCondition.LIKE_NEW,
                    "Downtown Maplewood - Porch Pickup",
                    demoUser
            );
            item1.addImage("https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80", true);
            itemRepository.save(item1);

            Item item2 = new Item(
                    "Graco Lightweight Foldable Baby Stroller",
                    "Our toddler has outgrown this stroller. Freshly cleaned, stain-free fabric, smooth wheels. Free to any family in need!",
                    "kids",
                    ListingType.DONATE,
                    BigDecimal.ZERO,
                    ItemCondition.GOOD,
                    "Oakridge Community Park Plaza",
                    demoUser
            );
            item2.addImage("https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80", true);
            itemRepository.save(item2);

            Item item3 = new Item(
                    "DeWalt 20V Max Cordless Drill & Impact Driver Kit",
                    "Includes 2 lithium-ion batteries, charger, and contractor bag. Heavy-duty reliability for DIY home projects.",
                    "tools",
                    ListingType.SWAP,
                    BigDecimal.ZERO,
                    ItemCondition.GOOD,
                    "Westside Makers Workshop",
                    demoUser
            );
            item3.addImage("https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80", true);
            itemRepository.save(item3);
        }
    }
}

