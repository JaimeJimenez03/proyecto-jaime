package proyectos.app.platform.service;


import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;

import java.util.List;

public interface ActividadService {

    // PETICIONES DEL CRUD //

    public List<Activity> getAllActividades();
    Activity inserActividad(Activity actividad);
    Activity updateActividad(Activity actividad);
    String  deleteActividad(Long id);



    // PETICIONES DE BÚSQUEDA PRINCIPAL//

    Activity findById(Long id);
    List<Activity> findByUsuarioCreador(Long id);
    List<Activity> getActivitiesByUser(Long id);
    List<Activity> getActivitiesBYId_Creador(Long id);







}
