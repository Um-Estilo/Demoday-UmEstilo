package com.umestilo.UmEstiloApiUsuarios.modelo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class ModeloMensagem {
    private String mensagem;
    private String email;
    private String token;
}
