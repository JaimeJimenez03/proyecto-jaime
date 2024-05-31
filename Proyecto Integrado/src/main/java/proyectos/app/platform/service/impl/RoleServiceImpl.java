package proyectos.app.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.app.platform.models.Role;
import proyectos.app.platform.repository.RoleRepository;
import proyectos.app.platform.service.RoleService;

import java.util.List;
import java.util.Optional;


@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }
}
