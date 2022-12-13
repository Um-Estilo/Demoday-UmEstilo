package com.umestilo.UmEstiloApiUsuarios.servico;

import com.umestilo.UmEstiloApiUsuarios.dto.UsuarioCredenciaisDTO;
import com.umestilo.UmEstiloApiUsuarios.modelo.*;
import com.umestilo.UmEstiloApiUsuarios.repositorio.EstilosRepositorio;
import com.umestilo.UmEstiloApiUsuarios.repositorio.RolesRepositorio;
import com.umestilo.UmEstiloApiUsuarios.repositorio.UsuariosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ServicoCadastro {
    @Autowired
    UsuariosRepositorio banco;
    @Autowired
    ModeloMensagem mensagem;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private RolesRepositorio roles;
    @Autowired
    EstilosRepositorio estilosRepositorio;

    public ResponseEntity<?> cadastrar(RegistroDTO dadosUsuarioDTO) {
        if (!dadosUsuarioDTO.getSenhaConfirmar().equals(dadosUsuarioDTO.getSenha())) {
            mensagem.setMensagem("Erro, as senhas estão diferentes.");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        }
        if (banco.existsByEmail(dadosUsuarioDTO.getEmail())) {
            mensagem.setMensagem("Erro, este e-mail já está cadastrado.");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if (banco.existsByCpf(dadosUsuarioDTO.getCpf())) {
            mensagem.setMensagem("Erro, este CPF já está cadastrado.");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        }
        if (dadosUsuarioDTO.getEmpreendedor()) {
            if (dadosUsuarioDTO.getCnpj().equals("")){
                mensagem.setMensagem("Erro, o usuário empreendedor precisa definir um CNPJ.");
                return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
            } else if (banco.existsByCnpj(dadosUsuarioDTO.getCnpj())) {
                mensagem.setMensagem("Erro, este CNPJ já está cadastrado.");
                return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
            }
        }
        RegistroUsuarioModelo dadosUsuario = new RegistroUsuarioModelo();
        Roles role = roles.findByName("user").get();
        dadosUsuario.setSenha(passwordEncoder.encode(dadosUsuarioDTO.getSenha()));
        dadosUsuario.setEmail(dadosUsuarioDTO.getEmail());
        dadosUsuario.setEmpreendedor(dadosUsuarioDTO.getEmpreendedor());
        dadosUsuario.setRoles(Collections.singletonList(role));
        dadosUsuario.setCpf(dadosUsuarioDTO.getCpf());
        dadosUsuario.setCnpj(dadosUsuarioDTO.getCnpj());
        dadosUsuario.setData_nascimento(dadosUsuarioDTO.getData_nascimento());
        dadosUsuario.setNomeCompleto(dadosUsuarioDTO.getNomeCompleto());
        List<ModeloEstilos> listaEstilos = new ArrayList<>();
        dadosUsuario.setEstilos(listaEstilos);
        banco.save(dadosUsuario);
        mensagem.setMensagem("Sucesso");
        return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
    }

    public ResponseEntity<?> logar(UsuarioCredenciaisDTO dadosUsuario) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(dadosUsuario.getEmail(), dadosUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        mensagem.setMensagem("Sucesso");
        mensagem.setEmail(dadosUsuario.getEmail());
        mensagem.setToken("autorizado");
        return new ResponseEntity<>(mensagem, HttpStatus.OK);
    }

    public ResponseEntity<?> estilos(EstilosDTO estilos) {
        List<ModeloEstilos> listaEstilos = new ArrayList<>();
        for (Integer i = 1; i <= estilosRepositorio.count(); i++) {
            if (estilos.getEstilos().contains(i.toString())) {
                listaEstilos.add(estilosRepositorio.findById(i).get());
            }
        }
        RegistroUsuarioModelo usuario = banco.findByEmail(estilos.getEmail_usuario()).orElseThrow(() -> new UsernameNotFoundException("E-mail inexistente"));
        usuario.setEstilos(listaEstilos);
        banco.save(usuario);
        mensagem.setMensagem("Sucesso");
        return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
    }
}
