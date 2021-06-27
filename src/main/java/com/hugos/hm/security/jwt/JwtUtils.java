package com.hugos.hm.security.jwt;

import com.hugos.hm.security.services.UserDetailsImpl;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import io.jsonwebtoken.*;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${hm.app.jwtSecret}")
    private String jwtSecret;

    @Value("${hm.app.jwtExpirationMs}")
    private String jwtExpirationMs;

    public String generateJwtToken(Authentication authentication){
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime()+jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getMailFromJwtToken(String token){
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken){
        try{
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        }catch(SignatureException e){
            logger.error("Invalid JWT signature: {}", e.getMessage());
        }catch(MalformedJwtException e){
            logger.error("Invalid JWT token: {}", e.getMessage());
        }catch(ExpiredJwtException e){
            logger.error("JWT Token is expired: {}", e.getMessage());
        }catch(UnsupportedJwtException e){
            logger.error("JWT Token is unsupported: {}", e.getMessage());
        }catch(IllegalArgumentException e){
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }
        return false;
    }
}
