package proyectos.app.platform.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectos.app.platform.models.Solicitud_Actividad;
import proyectos.app.platform.models.User;
import proyectos.app.platform.service.impl.Solicitud_ActividadServiceImpl;
import proyectos.app.platform.service.impl.UsuarioServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/solicitudes")
public class Solicitud_ActividadController {

    @Autowired
    Solicitud_ActividadServiceImpl solicitudActividadService;

    @Autowired
    UsuarioServiceImpl usuarioService;

    @GetMapping
    public ResponseEntity<List<Solicitud_Actividad>> getAllSolicitudes() {

        List<Solicitud_Actividad> solicitudActividads = new ArrayList<>(solicitudActividadService.getAllSolicitudes());

        if (solicitudActividads.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new ArrayList<>(solicitudActividads), HttpStatus.OK);
    }

    @GetMapping("/solicitud/user/{id}")
    public ResponseEntity<User> getUserBySolicitydes(@PathVariable Long id) {

        User user = usuarioService.getUsuarioBySolicitud(id);

        if(user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);

        }

        return null;
    }


    @PostMapping("/solicitud/add")
    public ResponseEntity<?> userAdd(@RequestBody Solicitud_Actividad solicitudActividad) {

        System.out.println(solicitudActividad);

        solicitudActividadService.insertSolicitud(solicitudActividad);

        List<Solicitud_Actividad> solicitudActividads = solicitudActividadService.getAllSolicitudes();

        return new ResponseEntity<>(solicitudActividads,HttpStatus.OK);
    }

    @PutMapping("/solicitud/edit/{id}")
    public ResponseEntity<?> userAdd(@PathVariable Long id, @RequestBody Solicitud_Actividad solicitudActividad) {

        Solicitud_Actividad solicitudActividadCurrent = solicitudActividadService.findSolicitudById(id);

        solicitudActividadCurrent.setNombre(solicitudActividad.getNombre());
        solicitudActividadCurrent.setConcepto(solicitudActividad.getConcepto());
        solicitudActividadCurrent.setCiudad(solicitudActividad.getCiudad());
        solicitudActividadService.updateSoliicitud(solicitudActividadCurrent);

        return new ResponseEntity<>(solicitudActividadCurrent,HttpStatus.OK);
    }


    @DeleteMapping("/solicitud/remove/{id}")
    public ResponseEntity<List<Solicitud_Actividad>> eliminarSolicitud(@PathVariable Long id) {


        solicitudActividadService.deleteSolicitud(id);

        List<Solicitud_Actividad> lista = solicitudActividadService.getAllSolicitudes();


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }



}




