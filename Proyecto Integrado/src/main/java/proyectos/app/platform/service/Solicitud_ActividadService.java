package proyectos.app.platform.service;


import proyectos.app.platform.models.Solicitud_Actividad;
import proyectos.app.platform.models.User;

import java.util.List;
import java.util.Optional;

public interface Solicitud_ActividadService {

    // PETICIONES DEL CRUD //

    List<Solicitud_Actividad> getAllSolicitudes();
    Solicitud_Actividad insertSolicitud(Solicitud_Actividad solicitudActividad);
    Solicitud_Actividad updateSoliicitud(Solicitud_Actividad solicitudActividad);
    void deleteSolicitud(Long id);


    // PETICION DE BÚSQUEDA PRINCIPAL //

    Solicitud_Actividad findSolicitudById(Long id);
    Solicitud_Actividad findByUsuario(User user);
    List<Solicitud_Actividad> obtenerSolicitudesPorUsuario(Long id);








}
