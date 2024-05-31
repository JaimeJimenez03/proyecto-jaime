package proyectos.app.platform.autentication;

import proyectos.app.platform.models.Role;

import java.io.Serializable;

// Ver si sirve o uso el de usuarios
public class AutenticacionRegistro implements Serializable {
    private static final long serialVersionUID = 1L;
    /* ~ Propiedades
    ==================================== */
    private String username;
    private String email;
    private String password;

    private String name;
    private String surname;
    private String city;
    private String dt_nac;
    private String n_telefono;
    private Role role;






    /* ~ Metodos
    ==================================== */
    public AutenticacionRegistro(){}

    public AutenticacionRegistro(String username, String email, String password, String name, String surname, String city, String dt_nac, String n_telefono, Role role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.dt_nac = dt_nac;
        this.n_telefono = n_telefono;
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDt_nac() {
        return dt_nac;
    }

    public void setDt_nac(String dt_nac) {
        this.dt_nac = dt_nac;
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

    public void setRole(Role role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
