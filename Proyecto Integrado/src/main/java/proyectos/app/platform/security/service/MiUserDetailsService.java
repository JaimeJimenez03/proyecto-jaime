package proyectos.app.platform.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import proyectos.app.platform.models.User;
import proyectos.app.platform.repository.UserRepository;

import java.util.Optional;


@Service
public class MiUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> usuario = usuarioRepository.findUserByUsername(username);
        usuario.orElseThrow(() -> new UsernameNotFoundException("No se encontro el usuario "+ username
                +" en la BD"));

        return usuario.map(MiUserDetails::new).get();

    }

}
