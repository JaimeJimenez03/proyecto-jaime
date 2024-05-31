package proyectos.app.platform.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import proyectos.app.platform.models.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {

}
