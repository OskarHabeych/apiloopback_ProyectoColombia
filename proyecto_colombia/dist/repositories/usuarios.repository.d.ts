import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Usuarios, UsuariosRelations } from '../models';
export declare class UsuariosRepository extends DefaultCrudRepository<Usuarios, typeof Usuarios.prototype.id, UsuariosRelations> {
    constructor(dataSource: MongoDataSource);
}
