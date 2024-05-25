import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ponencias, PonenciasRelations, Usuarios } from '../models';
import { UsuariosRepository } from './usuarios.repository';
export declare class PonenciasRepository extends DefaultCrudRepository<Ponencias, typeof Ponencias.prototype.id, PonenciasRelations> {
    protected usuariosRepositoryGetter: Getter<UsuariosRepository>;
    readonly resenaFk: BelongsToAccessor<Usuarios, typeof Ponencias.prototype.id>;
    constructor(dataSource: MongoDataSource, usuariosRepositoryGetter: Getter<UsuariosRepository>);
}
