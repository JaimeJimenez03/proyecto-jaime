package proyectos.app.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.repository.ActividadRepository;
import proyectos.app.platform.service.ActividadService;

import java.util.List;

@Service
public class ActividadServiceImpl implements ActividadService {

    @Autowired
    ActividadRepository actividadRepository;

    @Override
    public List<Activity> getAllActividades() {
        return actividadRepository.findAll();
    }

    @Override
    public Activity findById(Long id) {
        if (id == null){
            return null;
        }
        return actividadRepository.findActividadById(id);
    }

    @Override
    public List<Activity> findByUsuarioCreador(Long id) {
        return actividadRepository.findActivityById_usuario_creador(id);
    }

    @Override
    public List<Activity> getActivitiesByUser(Long id) {
        return actividadRepository.getActividadesPorUsuario(id);
    }

    @Override
    public List<Activity> getActivitiesBYId_Creador(Long id) {
        return actividadRepository.getActivitiesById_usuario_creador(id);
    }

    @Override
    public Activity inserActividad(Activity actividad) {
        if (actividad == null) {
            return null;
        }
        return actividadRepository.save(actividad);
    }

    @Override
    public Activity updateActividad(Activity actividad) {
        if (actividad == null) {
            return null;
        }
        return actividadRepository.save(actividad);
    }

    @Override
    public String deleteActividad(Long id) {
        if (id != null) {
            actividadRepository.deleteById(id);
            return "Actividad eliminada";
        }
        return "No se ha podido encontrar el id: " + id;
    }
}
