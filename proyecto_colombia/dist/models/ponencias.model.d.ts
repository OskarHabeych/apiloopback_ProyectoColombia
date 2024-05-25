import { Entity } from '@loopback/repository';
export declare class Ponencias extends Entity {
    id?: string;
    ponencia?: any;
    resena: string;
    fecha: string;
    constructor(data?: Partial<Ponencias>);
}
export interface PonenciasRelations {
}
export type PonenciasWithRelations = Ponencias & PonenciasRelations;
