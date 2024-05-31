package proyectos.app.platform.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;
import proyectos.app.platform.repository.Usuario_ActividadRepository;
import proyectos.app.platform.service.Usuario_ActividadService;

import java.util.List;
import java.util.Optional;

@Service
public class Usuario_ActividadServiceimpl implements Usuario_ActividadService {

    @Autowired
    Usuario_ActividadRepository usuarioActividadRepository;


    @Override
    public User_Activity insertRelacion(User_Activity userActivity) {
        return usuarioActividadRepository.save(userActivity);
    }
    @Override
    public void deleteUsuarioActividad(User_Activity userActivity) {
        usuarioActividadRepository.delete(userActivity);
    }

    @Override
    public Optional<User_Activity> findById(Long id) {

        return usuarioActividadRepository.findById(id);
    }
    @Override
    public List<User_Activity> findByUsuario(User user) {
        return usuarioActividadRepository.findUser_ActivitiesByUsuario(user);
    }
    @Override
    public List<User_Activity> findByActividad(Activity activity) {
        return usuarioActividadRepository.findUser_ActivitiesByActividad(activity);
    }
    @Override
    public User_Activity findSolicitud_ActividadByUsuarioAndActividad(User user, Activity activity) {
        return usuarioActividadRepository.findByUsuarioAndActividad(user, activity);
    }
}
