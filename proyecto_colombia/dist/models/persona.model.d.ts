import { Entity } from '@loopback/repository';
export declare class Persona extends Entity {
    id?: string;
    alias: string;
    actividad?: string;
    pais?: string;
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export type PersonaWithRelations = Persona & PersonaRelations;
