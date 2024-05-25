import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Persona, PersonaRelations, Usuarios } from '../models';
import { UsuariosRepository } from './usuarios.repository';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    protected usuariosRepositoryGetter: Getter<UsuariosRepository>;
    readonly aliasFk: BelongsToAccessor<Usuarios, typeof Persona.prototype.id>;
    constructor(dataSource: MongoDataSource, usuariosRepositoryGetter: Getter<UsuariosRepository>);
}
