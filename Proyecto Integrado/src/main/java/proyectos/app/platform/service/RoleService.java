package proyectos.app.platform.service;

import proyectos.app.platform.models.Role;

import java.util.List;
import java.util.Optional;


public interface RoleService {

    // PETICIONES //

    List<Role> getAllRoles();
    Optional<Role> findById(Long id);

}
