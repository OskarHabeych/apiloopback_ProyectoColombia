import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Aportes } from '../models';
import { AportesRepository } from '../repositories';
export declare class AportesController {
    aportesRepository: AportesRepository;
    constructor(aportesRepository: AportesRepository);
    create(aportes: Omit<Aportes, 'id'>): Promise<Aportes>;
    count(where?: Where<Aportes>): Promise<Count>;
    find(filter?: Filter<Aportes>): Promise<Aportes[]>;
    updateAll(aportes: Aportes, where?: Where<Aportes>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Aportes>): Promise<Aportes>;
    updateById(id: string, aportes: Aportes): Promise<void>;
    replaceById(id: string, aportes: Aportes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
