package proyectos.app.platform.api.controller;

import io.jsonwebtoken.impl.JwtMap;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;
import proyectos.app.platform.repository.Usuario_ActividadRepository;
import proyectos.app.platform.service.impl.ActividadServiceImpl;
import proyectos.app.platform.service.impl.UsuarioServiceImpl;
import proyectos.app.platform.service.impl.Usuario_ActividadServiceimpl;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario_actividad")
public class Usuario_ActividadController {

    @Autowired
    Usuario_ActividadServiceimpl usuarioActividadService;

    //TODO
    @Autowired
    Usuario_ActividadRepository usuarioActividadRepository;

    @Autowired
    UsuarioServiceImpl usuarioService;

    @Autowired
    ActividadServiceImpl actividadService;

    //TODO

    @PostMapping("/relacion/remove/{idActividad}")
    public ResponseEntity<Map<String, Object>> eliminarSolicitud(@RequestBody Long idUsuario, @PathVariable Long idActividad) {

        Activity activity = actividadService.findById(idActividad);

        User user = usuarioService.findUserById(idUsuario);

        activity.setN_usuarios(-1);
        actividadService.updateActividad(activity);


        User_Activity userActivity = usuarioActividadService.findSolicitud_ActividadByUsuarioAndActividad(user, activity);

        System.out.println("useractivitie, " + userActivity);


        usuarioActividadService.deleteUsuarioActividad(userActivity);

        List<User> listaUsuarios = usuarioService.getUsuariosByActividad(idActividad);
        List<Activity> listaActividades = actividadService.getActivitiesByUser(idUsuario);

        Map<String, Object> response = new JwtMap();
        response.put("listaUsuarios", listaUsuarios);
        response.put("listaActividades", listaActividades);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }


    @PostMapping("/relacion/add/")
    public ResponseEntity<?> addUsuarioActividad(@RequestBody User_Activity userActivity ) {

        Activity activity = actividadService.findById(userActivity.getActividad().getId());
        activity.setN_usuarios(1);
        actividadService.updateActividad(activity);

        User user = usuarioService.findUserById(userActivity.getUsuario().getId());

        if(usuarioActividadService.findSolicitud_ActividadByUsuarioAndActividad(user, activity) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }


        usuarioActividadService.insertRelacion(userActivity);

        return new ResponseEntity<>(activity, HttpStatus.OK);
    }
}




