package proyectos.app.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import proyectos.app.platform.models.User;
import proyectos.app.platform.repository.UserRepository;
import proyectos.app.platform.service.UsuarioService;

import java.util.List;


@Service
public class UsuarioServiceImpl implements UsuarioService {


    @Autowired
    private UserRepository userRepository;

    // PETICION DEL CRUD //

    @Override
    @Transactional(readOnly = true)
    public List<User> gettAllUsers() {
        return (List<User>) userRepository.findAll();
    }
    @Override
    public User insertUser(User usuario) {
        if (usuario != null) {
            userRepository.save(usuario);
        }
        return null;
    }
    @Override
    public User updateUser(User user) {
        if(user == null || user.getId() == null) {
            return null;
        }
        return userRepository.save(user);
    }
    @Override
    public String deleteUser(Long id) {
        if (id != null) {
            userRepository.deleteById(id);
            return "Usuario eliminado con éxito";
        }
        return "No se ha podido encontrar el id: " + id;
    }


    @Override
    @Transactional(readOnly = true)
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    @Override
    @Transactional(readOnly = true)
    public User buscarUsuarioPorUsername(String username) {
        return userRepository.findUserByUsername(username).orElse(null);
    }
    @Override
    @Transactional(readOnly = true)
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElse(null);
    }

    @Override
    public List<User> getUsuariosByActividad(Long id) {
        return userRepository.getUsuariosByActividad(id);
    }

    @Override
    public User getUsuarioBySolicitud(Long id) {
        return userRepository.getUsuarioBySolicitud(id);
    }

    @Override
    public List<User> getUsuarioByRolId(Long id) {
        return userRepository.getUsuarioByIdRol(id);
    }
}
