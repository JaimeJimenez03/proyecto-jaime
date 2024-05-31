package proyectos.app.platform.autentication;


import proyectos.app.platform.api.dto.UserDTO;

import java.io.Serializable;

public class AutenticacionResponse implements Serializable {
    private static final long serialVersionUID = 1L;
    private String token;
    private UserDTO user;
    public AutenticacionResponse(String token, UserDTO user){
        this.token = token;
        this.user = user;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
