package proyectos.app.platform.models;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "users_activities")
public class User_Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User usuario;



    @ManyToOne
    @JoinColumn(name = "id_actividad")
    private Activity actividad;


    public User_Activity() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }

    public Activity getActividad() {
        return actividad;
    }

    public void setActividad(Activity actividad) {
        this.actividad = actividad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User_Activity that = (User_Activity) o;
        return Objects.equals(id, that.id) && Objects.equals(usuario, that.usuario) && Objects.equals(actividad, that.actividad);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, usuario, actividad);
    }

    @Override
    public String
    toString() {
        return "User_Activity{" +
                "id=" + id +
                ", usuario=" + usuario +
                ", actividad=" + actividad +
                '}';
    }
}
