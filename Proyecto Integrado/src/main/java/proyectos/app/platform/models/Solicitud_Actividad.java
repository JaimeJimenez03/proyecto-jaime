package proyectos.app.platform.models;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="solicitud_actividad")
public class Solicitud_Actividad implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "concepto", nullable = false)
    private String concepto;

    @Column(name = "ciudad", nullable = false)
    private String ciudad;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private User usuario;


    public Solicitud_Actividad() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public User getUsuario() {
        return usuario;
    }

    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Solicitud_Actividad that = (Solicitud_Actividad) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(concepto, that.concepto) && Objects.equals(ciudad, that.ciudad) && Objects.equals(usuario, that.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, concepto, ciudad, usuario);
    }

    @Override
    public String toString() {
        return "Solicitud_Actividad{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", concepto='" + concepto + '\'' +
                ", ciudad='" + ciudad + '\'' +
                ", usuario=" + usuario +
                '}';
    }
}