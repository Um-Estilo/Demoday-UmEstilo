package com.umestilo.UmEstiloApiUsuarios.controlador;

import com.umestilo.UmEstiloApiUsuarios.dto.UsuarioCredenciaisDTO;
import com.umestilo.UmEstiloApiUsuarios.modelo.EstilosDTO;
import com.umestilo.UmEstiloApiUsuarios.modelo.RegistroDTO;
import com.umestilo.UmEstiloApiUsuarios.modelo.RegistroUsuarioModelo;
import com.umestilo.UmEstiloApiUsuarios.repositorio.UsuariosRepositorio;
import com.umestilo.UmEstiloApiUsuarios.servico.ServicoCadastro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class Controlador {

    @Autowired
    UsuariosRepositorio banco;
    @Autowired
    ServicoCadastro servico;

    @PostMapping("cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody RegistroDTO dadosUsuarioDTO) {
        return servico.cadastrar(dadosUsuarioDTO);
    }

    @PostMapping("logar")
    public ResponseEntity<?> logar(@RequestBody UsuarioCredenciaisDTO dadosUsuario) {
        return servico.logar(dadosUsuario);
    }

    @PutMapping("estilos")
    public ResponseEntity<?> estilos(@RequestBody EstilosDTO estilizar) {
        return servico.estilos(estilizar);
    }
}
