package com.umestilo.UmEstiloApiUsuarios.repositorio;

import com.umestilo.UmEstiloApiUsuarios.modelo.ModeloEstilos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EstilosRepositorio extends JpaRepository <ModeloEstilos, Integer> {
    @Override
    Optional<ModeloEstilos> findById(Integer integer);
}
