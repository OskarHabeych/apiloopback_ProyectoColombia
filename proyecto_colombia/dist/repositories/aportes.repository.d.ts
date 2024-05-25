import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Aportes, AportesRelations, Persona } from '../models';
import { PersonaRepository } from './persona.repository';
export declare class AportesRepository extends DefaultCrudRepository<Aportes, typeof Aportes.prototype.id, AportesRelations> {
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly comentarioFk: BelongsToAccessor<Persona, typeof Aportes.prototype.id>;
    constructor(dataSource: MongoDataSource, personaRepositoryGetter: Getter<PersonaRepository>);
}
