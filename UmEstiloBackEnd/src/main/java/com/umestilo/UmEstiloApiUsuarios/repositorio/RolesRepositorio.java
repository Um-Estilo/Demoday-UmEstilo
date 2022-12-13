package com.umestilo.UmEstiloApiUsuarios.repositorio;

import com.umestilo.UmEstiloApiUsuarios.modelo.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolesRepositorio extends JpaRepository<Roles, Integer> {
    Optional<Roles> findByName(String name);
}
