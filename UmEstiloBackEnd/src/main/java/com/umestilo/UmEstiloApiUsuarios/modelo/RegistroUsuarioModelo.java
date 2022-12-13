package com.umestilo.UmEstiloApiUsuarios.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.management.relation.Role;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Usuarios")
public class RegistroUsuarioModelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomeCompleto;
    private String email;
    private String senha;
    private String cpf;
    private Calendar data_nascimento;
    private Boolean empreendedor;
    private String cnpj;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Roles> roles = new ArrayList<Roles>();

    @ManyToMany
    @JoinTable(name = "usuariosEstilos", joinColumns = @JoinColumn(name = "usuario_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "estilo_id", referencedColumnName = "id"))
    private List<ModeloEstilos> estilos = new ArrayList<ModeloEstilos>();
}
