import { Role } from "./role"
import { SolicitudActividad } from "./solicitud-actividad"

export interface Usuario {
    id: number,
    email: string,
    username: string,
    password: string,
    name: string
    surname: string,
    city: string,
    dt_nac: Date,
    n_telefono: string,
    role: Role,
    id_solicitud: SolicitudActividad[]
}
