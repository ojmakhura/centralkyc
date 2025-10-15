package bw.co.centralkyc;

import java.util.Collections;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.context.annotation.Configuration;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers("/css/**", "/images/**", "/js/**", "/index").permitAll()
                        .requestMatchers(HttpMethod.GET, "/", "/index.html", "/public-page").permitAll()
                        .anyRequest().authenticated())
                .oauth2Client(Customizer.withDefaults()) 
                .oauth2Login(Customizer.withDefaults());
        return http.build();
    }
}
