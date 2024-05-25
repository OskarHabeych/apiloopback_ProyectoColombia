import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ponencias } from '../models';
import { PonenciasRepository } from '../repositories';
export declare class PonenciasController {
    ponenciasRepository: PonenciasRepository;
    constructor(ponenciasRepository: PonenciasRepository);
    create(ponencias: Omit<Ponencias, 'id'>): Promise<Ponencias>;
    count(where?: Where<Ponencias>): Promise<Count>;
    find(filter?: Filter<Ponencias>): Promise<Ponencias[]>;
    updateAll(ponencias: Ponencias, where?: Where<Ponencias>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Ponencias>): Promise<Ponencias>;
    updateById(id: string, ponencias: Ponencias): Promise<void>;
    replaceById(id: string, ponencias: Ponencias): Promise<void>;
    deleteById(id: string): Promise<void>;
}
