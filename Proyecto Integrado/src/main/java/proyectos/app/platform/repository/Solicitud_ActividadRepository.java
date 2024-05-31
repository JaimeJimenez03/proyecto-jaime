package proyectos.app.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectos.app.platform.models.Solicitud_Actividad;
import proyectos.app.platform.models.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface Solicitud_ActividadRepository extends JpaRepository<Solicitud_Actividad, Long> {

    @Query(value = "SELECT  sa.* FROM solicitud_actividad sa ", nativeQuery = true)
    List<Solicitud_Actividad> getAllSolicitudes();
    @Query(value = "SELECT  sa.* FROM users u , solicitud_actividad sa WHERE sa.id_usuario   = u.id and sa.id_usuario = :id ", nativeQuery = true)
    List<Solicitud_Actividad> obtenerSolicitudesPorUsuario(Long id);
    Solicitud_Actividad findSolicitud_ActividadsByUsuario(User user);
}
