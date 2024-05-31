package proyectos.app.platform.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import proyectos.app.platform.models.Role;
import proyectos.app.platform.models.User;
import proyectos.app.platform.service.impl.RoleServiceImpl;
import proyectos.app.platform.service.impl.UsuarioServiceImpl;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
public class RolController {

    //TODO
    @Autowired
    RoleServiceImpl roleService;

    @Autowired
    UsuarioServiceImpl usuarioService;

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roles = new ArrayList<>(roleService.getAllRoles());
        if (roles.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ArrayList<>(roles), HttpStatus.OK);
    }

    @GetMapping("/n_usuarios/{id}")
    public ResponseEntity<List<User>> getAllUsuariosByRol(@PathVariable Long id) {
        List<User> usuarios = new ArrayList<>(usuarioService.getUsuarioByRolId(id));
        if (usuarios.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ArrayList<>(usuarios), HttpStatus.OK);
    }

    @GetMapping("/rol/{id}")
    public ResponseEntity<?> getRolById(@PathVariable Long id) {
        Optional<Role> rol = roleService.findById(id);
        return new ResponseEntity<>(rol, HttpStatus.OK);
    }


}