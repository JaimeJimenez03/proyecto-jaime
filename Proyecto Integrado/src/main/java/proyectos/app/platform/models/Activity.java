package proyectos.app.platform.models;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "activity")
public class Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "dia", nullable = false)
    private Date dia;

    @Column(name = "ciudad", nullable = false)
    private String ciudad;

    @Column(name = "precio")
    private double precio;

    @Column(name = "hora_inicio", nullable = false)
    private String hora_inicio;
    @Column(name = "hora_fin")
    private String hora_fin;

    @Column(name = "duracion_aprox")
    private String duracion_aprox;

    @Column(name = "n_plazas")
    private int n_plazas;

    @Column(name = "n_plazas_min")
    private int n_plazas_min;

    @Column(name = "n_usuarios")
    private int n_usuarios;

    @Column(name = "personal")
    private boolean personal;

    @Column(name = "transporte")
    private boolean transporte;

    @Column(name = "material")
    private boolean material;

    @Column(name = "preparacion_f")
    private String preparacion_f;

    @Column(name = "puntuacion", nullable = true)
    private double puntuacion;

    @Column(name = "n_votantes")
    private int n_votantes;


    @ManyToOne
    @JoinColumn(name = "id_usuario_creador")
    private User id_usuario_creador;

    public Activity() {

    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getDia() {
        return dia;
    }

    public void setDia(Date dia) {
        this.dia = dia;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getHora_inicio() {
        return hora_inicio;
    }

    public void setHora_inicio(String hora_inicio) {
        this.hora_inicio = hora_inicio;
    }

    public String getHora_fin() {
        return hora_fin;
    }

    public void setHora_fin(String hora_fin) {
        this.hora_fin = hora_fin;
    }

    public String getDuracion_aprox() {
        return duracion_aprox;
    }

    public void setDuracion_aprox(String duracion_aprox) {
        this.duracion_aprox = duracion_aprox;
    }

    public int getN_plazas() {
        return n_plazas;
    }

    public void setN_plazas(int n_plazas) {
        this.n_plazas = n_plazas;
    }

    public int getN_plazas_min() {
        return n_plazas_min;
    }

    public void setN_plazas_min(int n_plazas_min) {
        this.n_plazas_min = n_plazas_min;
    }

    public int getN_usuarios() {
        return n_usuarios;
    }

    public void setN_usuarios(int n_usuarios) {
        this.n_usuarios = this.n_usuarios + n_usuarios;
    }

    public boolean isPersonal() {
        return personal;
    }

    public void setPersonal(boolean personal) {
        this.personal = personal;
    }

    public boolean isTransporte() {
        return transporte;
    }

    public void setTransporte(boolean transporte) {
        this.transporte = transporte;
    }

    public boolean isMaterial() {
        return material;
    }

    public void setMaterial(boolean material) {
        this.material = material;
    }

    public String getPreparacion_f() {
        return preparacion_f;
    }

    public void setPreparacion_f(String preparacion_f) {
        this.preparacion_f = preparacion_f;
    }

    public double getPuntuacion() {

        return puntuacion;
    }

    public void setPuntuacion(double puntuacion) {

        this.n_votantes++;
        this.puntuacion += puntuacion;
        double media = this.puntuacion / this.n_votantes;
        this.puntuacion = Math.round(media);

    }

    public int getN_votantes() {
        return n_votantes;
    }

    public void setN_votantes() {
        this.n_votantes ++;
    }

    public User getId_usuario_creador() {
        return id_usuario_creador;
    }

    public void setId_usuario_creador(User id_usuario_creador) {
        this.id_usuario_creador = id_usuario_creador;
    }

    public String getImagen() {

        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", imagen='" + imagen + '\'' +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", dia=" + dia +
                ", ciudad='" + ciudad + '\'' +
                ", precio=" + precio +
                ", hora_inicio='" + hora_inicio + '\'' +
                ", hora_fin='" + hora_fin + '\'' +
                ", duracion_aprox='" + duracion_aprox + '\'' +
                ", n_plazas=" + n_plazas +
                ", n_plazas_min=" + n_plazas_min +
                ", n_usuarios=" + n_usuarios +
                ", personal=" + personal +
                ", transporte=" + transporte +
                ", material=" + material +
                ", preparacion_f='" + preparacion_f + '\'' +
                ", puntuacion=" + puntuacion +
                ", n_votantes=" + n_votantes +
                ", id_usuario_creador=" + id_usuario_creador +
                '}';
    }
}

