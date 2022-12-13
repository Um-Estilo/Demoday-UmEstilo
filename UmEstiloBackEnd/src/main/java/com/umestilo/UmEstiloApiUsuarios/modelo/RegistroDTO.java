package com.umestilo.UmEstiloApiUsuarios.modelo;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Calendar;

@Getter
@Setter
public class RegistroDTO {
    private Integer id;
    private String nomeCompleto;
    private String email;
    private String senha;
    private String senhaConfirmar;
    private String cpf;
    private Calendar data_nascimento;
    private ArrayList<String> listaEstilos = new ArrayList<String>();
    private Boolean empreendedor;
    private String cnpj;
}
