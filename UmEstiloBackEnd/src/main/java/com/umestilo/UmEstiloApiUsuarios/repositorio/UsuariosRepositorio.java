package com.umestilo.UmEstiloApiUsuarios.repositorio;

import com.umestilo.UmEstiloApiUsuarios.modelo.RegistroUsuarioModelo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuariosRepositorio extends CrudRepository<RegistroUsuarioModelo, Integer> {

    Boolean existsByEmail (String email);
    Boolean existsByCpf (String cpf);
    Boolean existsByCnpj (String cnpj);
    Optional<RegistroUsuarioModelo> findByEmail (String email);
}
