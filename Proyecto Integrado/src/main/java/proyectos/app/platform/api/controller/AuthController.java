package proyectos.app.platform.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import proyectos.app.platform.api.dto.UserDTO;
import proyectos.app.platform.autentication.AutenticacionLogin;
import proyectos.app.platform.autentication.AutenticacionResponse;
import proyectos.app.platform.models.User;
import proyectos.app.platform.security.service.MiUserDetailsService;
import proyectos.app.platform.security.utils.JwtUtil;
import proyectos.app.platform.service.UsuarioService;

@RestController
public class AuthController {


    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authManager;
    @Autowired
    private MiUserDetailsService miUserDetailsService;
    @Autowired
    private JwtUtil jwtUtil;




    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){

        User user1 = usuarioService.buscarUsuarioPorUsername(user.getUsername());


        if(user1 != null && user1.isActivo()) {
            return ResponseEntity.badRequest().body("Nombre de usuario ya registrado.");
        }

        System.out.println(user);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActivo(true);
        usuarioService.insertUser(user);

        return ResponseEntity.ok(user);

    }




    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AutenticacionLogin autLogin) throws Exception{


        User user = usuarioService.buscarUsuarioPorUsername(autLogin.getUsername());

        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setUsername(user.getUsername());
        userDTO.setSurname(user.getSurname());
        userDTO.setEmail(user.getEmail());
        userDTO.setCity(user.getCity());
        userDTO.setRole(user.getRole());
        userDTO.setN_telefono(user.getN_telefono());



        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(autLogin.getUsername(), autLogin.getPassword())
            );

        }catch (BadCredentialsException ex){
            return ResponseEntity.badRequest().body("Error al introducir usuario  o contraseña ");
        }

        final UserDetails userDetails = miUserDetailsService.loadUserByUsername(autLogin.getUsername());
        final String token = jwtUtil.creatToken(userDetails);


        return ResponseEntity.ok(new AutenticacionResponse(token, userDTO));
    }

}