package proyectos.app.platform.models;

import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;


@Entity
@Table(name = "users")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "city")
    private String city;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "dt_nac")
    private Date dt_nac;

    @Column(name = "n_telefono")
    private String n_telefono;

    @ManyToOne
    @JoinColumn(name = "id_rol")
    private Role role;


    private boolean activo;


    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String nombre_usuario) {
        this.username = nombre_usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String passwd) {
        this.password = passwd;
    }

    public String getName() {
        return name;
    }

    public void setName(String nombre) {
        this.name = nombre;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String apellidos) {
        this.surname = apellidos;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String ciudad) {
        this.city = ciudad;
    }

    public Date getDt_nac() {
        return dt_nac;
    }

    public void setDt_nac(Date fecha_nacimiento) {
        this.dt_nac = fecha_nacimiento;
    }

    public String getN_telefono() {
        return n_telefono;
    }

    public void setN_telefono(String n_telefono) {
        this.n_telefono = n_telefono;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role rol) {
        this.role = rol;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User usuario = (User) o;
        return Objects.equals(id, usuario.id) && Objects.equals(email, usuario.email) && Objects.equals(username, usuario.username) && Objects.equals(password, usuario.password) && Objects.equals(name, usuario.name) && Objects.equals(surname, usuario.surname) && Objects.equals(city, usuario.city) && Objects.equals(dt_nac, usuario.dt_nac) && Objects.equals(n_telefono, usuario.n_telefono) && Objects.equals(role, usuario.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, username, password, name, surname, city, dt_nac, n_telefono, role);
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", nombre_usuario='" + username + '\'' +
                ", password='" + password + '\'' +
                ", nombre='" + name + '\'' +
                ", apellidos='" + surname + '\'' +
                ", ciudad='" + city + '\'' +
                ", fecha_nacimiento=" + dt_nac +
                ", n_telefono=" + n_telefono +
                ", rol=" + role +

                '}';
    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }
}