package org.njax.trinetco.netgrid.java.api.configuration;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.TokenExpiredException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.njax.trinetco.netgrid.java.api.services.MyUserDetailsService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

import static org.njax.trinetco.netgrid.java.api.configuration.SecurityConstants.*;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private MyUserDetailsService userDetailsService;

    public JWTAuthorizationFilter(AuthenticationManager authManager, MyUserDetailsService userDetailsService) {
        super(authManager);
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws IOException, ServletException {
        String header = req.getHeader(HEADER_STRING);

        if (header == null || !header.startsWith(TOKEN_PREFIX)) {
            chain.doFilter(req, res);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = null;
        try {
            authentication = getAuthentication(req);
            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (TokenExpiredException e) {
            System.out.println(e.getMessage());
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.getOutputStream().println("{ \"error\": \"Token Expired\" }");
            res.getOutputStream().flush();
            res.getOutputStream().close();
            return;
        }

        chain.doFilter(req, res);
    }

    // Reads the JWT from the Authorization header, and then uses JWT to validate the token
    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);

        if (token != null) {
            String user = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                        .build()
                        .verify(token.replace(TOKEN_PREFIX, ""))
                        .getSubject();

            if (user != null) {
                UserDetails details = userDetailsService.loadUserByUsername(user);

                return new UsernamePasswordAuthenticationToken(user, null, details.getAuthorities());
            }

            return null;
        }

        return null;
    }
}
