import { Entity } from '@loopback/repository';
export declare class Usuarios extends Entity {
    id?: string;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    password: string;
    constructor(data?: Partial<Usuarios>);
}
export interface UsuariosRelations {
}
export type UsuariosWithRelations = Usuarios & UsuariosRelations;
