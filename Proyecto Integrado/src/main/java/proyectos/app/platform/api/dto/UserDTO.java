package proyectos.app.platform.api.dto;


import proyectos.app.platform.models.Role;

public class UserDTO {


    private Long id;

    private String name;
    private String username;

    private String surname;

    private String email;

    private Role role;

    private String n_telefono;

    private String city;

    public UserDTO() {

    }

    public UserDTO(Long id, String name, String username, String surname, String email, Role role, String n_telefono, String city) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.n_telefono = n_telefono;
        this.city = city;
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

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getN_telefono() {
        return n_telefono;
    }

    public void setN_telefono(String n_telefono) {
        this.n_telefono = n_telefono;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                ", role=" + role +
                ", n_telefono='" + n_telefono + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
