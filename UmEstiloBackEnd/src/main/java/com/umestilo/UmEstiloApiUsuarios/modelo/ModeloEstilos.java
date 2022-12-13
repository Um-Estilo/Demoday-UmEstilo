package com.umestilo.UmEstiloApiUsuarios.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "estilos")
public class ModeloEstilos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomeEstilo;
}
