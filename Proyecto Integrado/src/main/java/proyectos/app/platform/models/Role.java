package proyectos.app.platform.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * Esta clase representa a la tabla de la BD llamada <b>roles</b>
 * en la cual las propiedades definidas aqui seran mapeadas a la tabla.
 * y en dicha tabla se encuentran los tipos de acceso al siste <b>(ADMIN, USER, PUBLIC)</b>.
 */

@Entity
@Table(name = "roles")
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;


    // ATRIBUTOS //

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;



    public Role() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String nombre) {
        this.name = nombre;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role rol = (Role) o;
        return Objects.equals(id, rol.id) && Objects.equals(name, rol.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "Rol{" +
                "id=" + id +
                ", nombre='" + name + '\'' +
                '}';
    }
}
