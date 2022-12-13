package com.umestilo.UmEstiloApiUsuarios.modelo;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class EstilosDTO {
    private String email_usuario;
    private ArrayList<String> estilos = new ArrayList<>();
}
