import { Model } from '@loopback/repository';
export declare class Credenciales extends Model {
    usuario: string;
    password: string;
    constructor(data?: Partial<Credenciales>);
}
export interface CredencialesRelations {
}
export type CredencialesWithRelations = Credenciales & CredencialesRelations;
