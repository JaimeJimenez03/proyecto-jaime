package proyectos.app.platform.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;
import proyectos.app.platform.service.impl.ActividadServiceImpl;
import proyectos.app.platform.service.impl.UsuarioServiceImpl;
import proyectos.app.platform.service.impl.Usuario_ActividadServiceimpl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/activities")
public class ActividadController {


    @Autowired
    ActividadServiceImpl actividadService;

    @Autowired
    UsuarioServiceImpl usuarioService;

    @Autowired
    Usuario_ActividadServiceimpl usuarioActividadServiceimpl;

    @GetMapping
    public ResponseEntity<List<Activity>> gettAllActivities() {

        List<Activity> activitiesList = new ArrayList<>(actividadService.getAllActividades());

        return new ResponseEntity<>(new ArrayList<>(activitiesList), HttpStatus.OK);
    }

    @GetMapping("/activitie/{id}")
    public ResponseEntity<Activity> getActivitie(@PathVariable Long id) {

        Activity actividad = actividadService.findById(id);

        if (actividad == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(actividad, HttpStatus.OK);
    }

    @GetMapping("/activitie/usuarios/{id}")
    public ResponseEntity<List<User>> getUsuariosByActividad(@PathVariable Long id) {

        List<User> listaUsuarios = usuarioService.getUsuariosByActividad(id);

        return new ResponseEntity<>(listaUsuarios, HttpStatus.OK);
    }


    @PostMapping("/activitie/add")
    public ResponseEntity<List<Activity>> insertActivitie(@RequestBody Activity actividad) {

        System.out.println(actividad);

        if (actividad != null) {

            actividadService.inserActividad(actividad);
        }


        List<Activity> listaActividades = actividadService.getAllActividades();

        if (listaActividades.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(listaActividades, HttpStatus.OK);
    }

    @PutMapping("/activitie/edit/{id}")
    public ResponseEntity<Activity> updateActivitie(@PathVariable Long id, @RequestBody Activity actividad) {

        Activity actividadCurrent = actividadService.findById(id);

        System.out.println("Activitie Current " + actividadCurrent);

        actividadCurrent.setNombre(actividad.getNombre());
        actividadCurrent.setDescripcion(actividad.getDescripcion());
        actividadCurrent.setCiudad(actividad.getCiudad());
        actividadCurrent.setPrecio(actividad.getPrecio());

        actividadCurrent.setPersonal(actividad.isPersonal());
        actividadCurrent.setMaterial(actividad.isMaterial());
        actividadCurrent.setTransporte(actividad.isTransporte());
        actividadCurrent.setN_plazas(actividad.getN_plazas());
        actividadCurrent.setN_plazas_min(actividad.getN_plazas_min());
        actividadCurrent.setPreparacion_f(actividad.getPreparacion_f());


        actividadCurrent.setDia(actividad.getDia());
        actividadCurrent.setDuracion_aprox(actividad.getDuracion_aprox());
        actividadCurrent.setHora_inicio(actividad.getHora_inicio());
        actividadCurrent.setHora_fin(actividad.getHora_fin());


        actividadService.updateActividad(actividadCurrent);


        return new ResponseEntity<>(actividadCurrent, HttpStatus.OK);
    }

    @DeleteMapping("/activitie/delete/{id}")
    public ResponseEntity<List<Activity>> deleteUser(@PathVariable Long id) {

        Activity activity = actividadService.findById(id);

        List<User_Activity> listaRelaciones = usuarioActividadServiceimpl.findByActividad(activity);

        for(int i = 0; i < listaRelaciones.size(); i++) {
            usuarioActividadServiceimpl.deleteUsuarioActividad(listaRelaciones.get(i));
        }


        actividadService.deleteActividad(id);

        List<Activity> listaActividades = actividadService.getAllActividades();


        return new ResponseEntity<>(listaActividades, HttpStatus.OK);
    }

    @PutMapping("/activitiy/puntuar/{idActividad}/{idUsuario}")
    public ResponseEntity<?> updateActivitie(@PathVariable Long idActividad, @PathVariable Long idUsuario, @RequestBody double puntuacion) {

        Activity actividadCurrent = actividadService.findById(idActividad);

        System.out.println("Activitie Current " + actividadCurrent);
        System.out.println("");

        System.out.println("Puntuación Original " + actividadCurrent.getPuntuacion());
        System.out.println("Nº de usuarios puntuando " + actividadCurrent.getN_votantes());
        System.out.println("");

        actividadCurrent.setPuntuacion(puntuacion);


        System.out.println("Puntuación Cambiada " + actividadCurrent.getPuntuacion());
        System.out.println("Nº de usuarios puntuando Cambiado " + actividadCurrent.getN_votantes());
        System.out.println("");

        actividadService.updateActividad(actividadCurrent);


        List<Activity> listaActividades = actividadService.getActivitiesByUser(idUsuario);

        return new ResponseEntity<>(listaActividades, HttpStatus.OK);
    }


}
