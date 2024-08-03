import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {SqliteDsDataSource} from '../datasources';
import {Ponencias, PonenciasRelations, Usuarios} from '../models';
import {UsuariosRepository} from './usuarios.repository';

export class PonenciasRepository extends DefaultCrudRepository<
  Ponencias,
  typeof Ponencias.prototype.id,
  PonenciasRelations
> {

  public readonly resenaFk: BelongsToAccessor<Usuarios, typeof Ponencias.prototype.id>;

  constructor(
    @inject('datasources.sqliteDS') dataSource: SqliteDsDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Ponencias, dataSource);
    this.resenaFk = this.createBelongsToAccessorFor('resenaFk', usuariosRepositoryGetter,);
    this.registerInclusionResolver('resenaFk', this.resenaFk.inclusionResolver);
  }
}
