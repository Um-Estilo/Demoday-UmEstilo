package com.umestilo.UmEstiloApiUsuarios.security;

import com.umestilo.UmEstiloApiUsuarios.modelo.RegistroUsuarioModelo;
import com.umestilo.UmEstiloApiUsuarios.modelo.Roles;
import com.umestilo.UmEstiloApiUsuarios.repositorio.UsuariosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UsuariosRepositorio banco;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        RegistroUsuarioModelo usuario = banco.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("E-mail não cadastrado"));
        return new User(usuario.getEmail(), usuario.getSenha(), mapRolesToAuthorities(usuario.getRoles()));
    }

    private Collection<GrantedAuthority> mapRolesToAuthorities(List<Roles> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
