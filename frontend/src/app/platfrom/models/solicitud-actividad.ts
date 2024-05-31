import { Usuario } from "./usuario";

export interface SolicitudActividad {
    id: number,
    nombre: string,
    concepto: string,
    ciudad: string,
    usuario: number
}
