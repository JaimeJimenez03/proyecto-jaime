package proyectos.app.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectos.app.platform.models.Activity;
import proyectos.app.platform.models.User;
import proyectos.app.platform.models.User_Activity;

import java.util.List;
import java.util.Optional;

@Repository
public interface Usuario_ActividadRepository extends JpaRepository<User_Activity, Long>{
    @Query(value = "SELECT ua.*  FROM users_activities ua , users u WHERE ua.id_usuario = u.id And u.id= :id", nativeQuery = true)
    Optional<User_Activity> obtenerUsuarioActividadPorUsuarioId(Long id);




    Optional<User_Activity> findById(Long id);

    List<User_Activity> findUser_ActivitiesByUsuario(User user);
    List<User_Activity> findUser_ActivitiesByActividad(Activity activity);

    User_Activity findByUsuarioAndActividad(User user, Activity activity);

}
