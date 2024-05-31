package proyectos.app.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;

import java.util.List;

@Repository
public interface ActividadRepository extends JpaRepository<Activity, Long> {

    Activity findActividadById(Long id);
    @Query(value = "select a.* from activity a , users u where a.id_usuario_creador  = u.id and u.id = :id", nativeQuery = true)
    List<Activity> findActivityById_usuario_creador(Long id);
    @Query(value = "SELECT a.* FROM activity a   INNER JOIN users_activities ua ON a.id = ua.id_actividad  INNER JOIN users u  ON ua.id_usuario  = u.id WHERE u.id = :id ", nativeQuery = true)
    List<Activity> getActividadesPorUsuario(Long id);
    @Query(value = "SELECT a.* FROM activity a, users u  where a.id_usuario_creador = u.id  and u.id  = :id ", nativeQuery = true)
    List<Activity> getActivitiesById_usuario_creador(Long id);
}
