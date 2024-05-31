package proyectos.app.platform.security.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import proyectos.app.platform.models.User;

import java.util.Collection;

public class MiUserDetails implements UserDetails {

    /* ~ Propiedades
    ==================================== */

    private String username;
    private String password;
    private boolean active;

    private SimpleGrantedAuthority authorities;


    /* ~ Metodos
    ==================================== */

    public MiUserDetails(User user){
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.active = user.isActivo();
        this.authorities = new SimpleGrantedAuthority("ROLE_"+ user.getRole().getName());



    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.active;
    }
}
