import { Usuario } from './usuario';
export interface Actividad {

    id: number,
    imagen: string
    nombre: string,
    descripcion: string,
    dia: Date,
    ciudad: string
    precio: number,
    hora_inicio: string,
    hora_fin: string,
    duracion_aprox: string,
    n_plazas: number,
    n_plazas_min: number,
    n_usuarios: number,
    personal: boolean,
    transporte: boolean,
    material: boolean,
    preparacion_f: string,
    puntuacion: number,
    id_usuario_creador: Usuario
    listaUsuarios: Usuario[],
}
