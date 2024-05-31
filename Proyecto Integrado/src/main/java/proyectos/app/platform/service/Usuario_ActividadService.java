package proyectos.app.platform.service;


import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;

import java.util.List;
import java.util.Optional;

public interface Usuario_ActividadService {

    // PETICIONES DEL CRUD //

    User_Activity insertRelacion(User_Activity userActivity);
    void deleteUsuarioActividad(User_Activity userActivity);



    // PETICIONES DE BÚSQUEDA //

    Optional<User_Activity> findById(Long id);
    List<User_Activity> findByUsuario(User user);
    List<User_Activity> findByActividad(Activity activity);


    // PETICIONES DE BÚSQUEDA SECUNDARIAS //

    User_Activity findSolicitud_ActividadByUsuarioAndActividad(User user, Activity activity);



}
