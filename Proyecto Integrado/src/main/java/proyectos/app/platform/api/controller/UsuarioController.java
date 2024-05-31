package proyectos.app.platform.api.controller;


import io.jsonwebtoken.impl.JwtMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import proyectos.app.platform.api.dto.UserDTO;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.Solicitud_Actividad;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;
import proyectos.app.platform.repository.ActividadRepository;
import proyectos.app.platform.repository.RoleRepository;
import proyectos.app.platform.service.UsuarioService;
import proyectos.app.platform.service.impl.ActividadServiceImpl;
import proyectos.app.platform.service.impl.Solicitud_ActividadServiceImpl;
import proyectos.app.platform.service.impl.UsuarioServiceImpl;
import proyectos.app.platform.service.impl.Usuario_ActividadServiceimpl;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UsuarioController {



    @Autowired
    UsuarioServiceImpl usuarioService;

    @Autowired
    ActividadServiceImpl actividadService;


    @Autowired
    Solicitud_ActividadServiceImpl solicitudActividadService;

    @Autowired
    Usuario_ActividadServiceimpl usuarioActividadServiceimpl;

    @Autowired
    RoleRepository rolRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @GetMapping
    public ResponseEntity <List<User>> gettAllUsers() {

        List<User> usersList = new ArrayList<>(usuarioService.gettAllUsers());

        return new ResponseEntity<>(new ArrayList<>(usersList), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {

        User user = usuarioService.findUserById(id);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/user/solicitudes/{id}")
    public ResponseEntity<List<Solicitud_Actividad>> getSolicitudesByUser(@PathVariable Long id) {

        List<Solicitud_Actividad> solicitudesActividades = solicitudActividadService.obtenerSolicitudesPorUsuario(id);

        return new ResponseEntity<>(solicitudesActividades, HttpStatus.OK);
    }

    @GetMapping("/user/actividades/{id}")
    public ResponseEntity<List<Activity>> getUsuariosByActividad(@PathVariable Long id) {

        List<Activity> listaAc = actividadService.getActivitiesByUser(id);

        return new ResponseEntity<>(listaAc, HttpStatus.OK);
    }






    @PutMapping("/user/edit/{id}")
    public ResponseEntity<User> userAdd(@PathVariable Long id, @RequestBody User usuario) {

        User userCurrent = usuarioService.findUserById(id);

        System.out.println("User Current " + userCurrent);

        userCurrent.setUsername(usuario.getUsername());
        userCurrent.setRole(usuario.getRole());

        usuarioService.updateUser(userCurrent);



        return new ResponseEntity<>(userCurrent,HttpStatus.OK);
    }


    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<List<User>> deleteUser(@PathVariable Long id) {

        User user = usuarioService.findUserById(id);


        List<Activity> listaActividades = actividadService.findByUsuarioCreador(id);


        //Eliminamos las posibles solicitudes del Usuario.

        List<Solicitud_Actividad> listaSolicitudes = solicitudActividadService.obtenerSolicitudesPorUsuario(user.getId());
        for (int  i = 0; i < listaSolicitudes.size(); i++){
            solicitudActividadService.deleteSolicitud(listaSolicitudes.get(i).getId());
        }


        //Eliminamos las relaciones

        for (int  i = 0; i < listaActividades.size(); i++){
            Activity actividad = actividadService.findById(listaActividades.get(i).getId());
            List<User_Activity> userActivities = usuarioActividadServiceimpl.findByActividad(actividad);

            for (int j = 0; j < userActivities.size(); i++) {
                usuarioActividadServiceimpl.deleteUsuarioActividad(userActivities.get(j));
            }
        }

        List<User_Activity> lista2 = usuarioActividadServiceimpl.findByUsuario(user);

        for (int  i = 0; i < lista2.size(); i++){
            usuarioActividadServiceimpl.deleteUsuarioActividad(lista2.get(i));
        }


        //Ahora eliminamos las actividades que tenga ese usuario

        for (int  i = 0; i < listaActividades.size(); i++){
            actividadService.deleteActividad(listaActividades.get(i).getId());
        }

        usuarioService.deleteUser(id);

        List<User> listaUsuarios = usuarioService.gettAllUsers();


        return new ResponseEntity<>(listaUsuarios,HttpStatus.OK);
    }

    @PostMapping("/user/add")
    public ResponseEntity<List<User>> userAdd(@RequestBody User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActivo(true);
        usuarioService.insertUser(user);

        List<User> listaUsuarios = usuarioService.gettAllUsers();

        return new ResponseEntity<>(listaUsuarios,HttpStatus.OK);
    }

    @GetMapping("/user/activities/{idUser}")
    public ResponseEntity<List<Activity>> getActivitiesByUserId(@PathVariable Long idUser) {

        List<Activity> activities = actividadService.getActivitiesBYId_Creador(idUser);

        return new ResponseEntity<>(activities,HttpStatus.OK);
    }


    @PutMapping("/user/editAll/{id}")
    public ResponseEntity<?> userEditAll(@PathVariable Long id, @RequestBody User usuario) {

        System.out.println("entra");

        User userCurrent = usuarioService.findUserById(id);

        userCurrent.setUsername(usuario.getUsername());
        userCurrent.setCity(usuario.getCity());
        userCurrent.setDt_nac(usuario.getDt_nac());
        userCurrent.setEmail(usuario.getEmail());
        userCurrent.setName(usuario.getName());
        userCurrent.setSurname(usuario.getSurname());
        userCurrent.setN_telefono(usuario.getN_telefono());
        if (!Objects.equals(usuario.getPassword(), "")) {
            userCurrent.setPassword(passwordEncoder.encode(usuario.getPassword()));
        }

        usuarioService.updateUser(userCurrent);

        UserDTO userDTO = new UserDTO();

        userDTO.setId(userCurrent.getId());
        userDTO.setName(userCurrent.getName());
        userDTO.setUsername(userCurrent.getUsername());
        userDTO.setSurname(userCurrent.getSurname());
        userDTO.setEmail(userCurrent.getEmail());
        userDTO.setCity(userCurrent.getCity());
        userDTO.setRole(userCurrent.getRole());
        userDTO.setN_telefono(userCurrent.getN_telefono());

        Map<String, Object> response = new JwtMap();
        response.put("usuarioLogin", userDTO);
        response.put("usuario", userCurrent);


        return new ResponseEntity<>(response,HttpStatus.OK);
    }

}
