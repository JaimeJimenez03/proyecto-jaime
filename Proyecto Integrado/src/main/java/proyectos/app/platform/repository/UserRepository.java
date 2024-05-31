package proyectos.app.platform.repository;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import proyectos.app.platform.models.User;

import java.util.List;
import java.util.Optional;

/**
 * Este repositorio extiende de {@link JpaRepository} que permite usar los metodos
 * para las operaciones basicas de un CRUD que se haran hacia la tabla de <b>usuarios</b>.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsername(String username);
    Optional<User> findUserByEmail(String correo);
    User findUsuarioById(Long id) throws DataAccessException;
    @Query(value = "SELECT u.* FROM users u WHERE u.username = :username ", nativeQuery = true)
    User findUsuarioByNombre_usuario(String username) throws DataAccessException;
    @Query(value = "SELECT u.* FROM users u  INNER JOIN users_activities ua ON u.id = ua.id_usuario INNER JOIN activity a ON ua.id_actividad = a.id WHERE a.id = :id ", nativeQuery = true)
    List<User> getUsuariosByActividad(Long id);
    @Query(value = "SELECT u.* from users u , solicitud_actividad sa where u.id = sa.id_usuario and sa.id = :id", nativeQuery = true)
    User getUsuarioBySolicitud(Long id);
    @Query(value = "SELECT u.* from users u , roles r WHERE u.id_rol = r.id and r.id  = :id", nativeQuery = true)
    List<User> getUsuarioByIdRol(Long id);
}
