package proyectos.app.platform.service;


import proyectos.app.platform.models.User;

import java.util.List;


public interface UsuarioService {

    // PETICIONES DEL CRUD //

    List<User> gettAllUsers();
    User insertUser(User usuario);
    User updateUser(User usuario);
    String deleteUser(Long id);


    // PETICIONES DE BÚSQUEDA PRINCIPALES //

    User findUserById(Long id);
    User buscarUsuarioPorUsername(String username);
    User findUserByEmail(String email);


    // PETICIONES DE BÚSQUEDAS SECUNDARIAS //

    List<User> getUsuariosByActividad(Long id);
    User getUsuarioBySolicitud(Long id);
    List<User> getUsuarioByRolId(Long id);


}
