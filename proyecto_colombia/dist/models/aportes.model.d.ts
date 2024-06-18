import { Entity } from '@loopback/repository';
export declare class Aportes extends Entity {
    id?: string;
    comantario: string;
    constructor(data?: Partial<Aportes>);
}
export interface AportesRelations {
}
export type AportesWithRelations = Aportes & AportesRelations;
