package proyectos.app.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.app.platform.models.Solicitud_Actividad;
import proyectos.app.platform.models.User;
import proyectos.app.platform.repository.Solicitud_ActividadRepository;
import proyectos.app.platform.service.Solicitud_ActividadService;

import java.util.List;

@Service
public class Solicitud_ActividadServiceImpl implements Solicitud_ActividadService {


    @Autowired
    Solicitud_ActividadRepository solicitudActividadRepository;

    @Override
    public List<Solicitud_Actividad> getAllSolicitudes() {
        return solicitudActividadRepository.getAllSolicitudes();
    }
    @Override
    public Solicitud_Actividad insertSolicitud(Solicitud_Actividad solicitudActividad) {
        return solicitudActividadRepository.save(solicitudActividad);
    }
    @Override
    public Solicitud_Actividad updateSoliicitud(Solicitud_Actividad solicitudActividad) {
        return solicitudActividadRepository.save(solicitudActividad);
    }
    @Override
    public void deleteSolicitud(Long id) {
        solicitudActividadRepository.deleteById(id);
    }
    @Override
    public Solicitud_Actividad findSolicitudById(Long id) {
        return solicitudActividadRepository.findById(id).orElse(null);
    }
    @Override
    public Solicitud_Actividad findByUsuario(User user) {
        return solicitudActividadRepository.findSolicitud_ActividadsByUsuario(user);
    }
    @Override
    public List<Solicitud_Actividad> obtenerSolicitudesPorUsuario(Long id) {
        return solicitudActividadRepository.obtenerSolicitudesPorUsuario(id);
    }




}
