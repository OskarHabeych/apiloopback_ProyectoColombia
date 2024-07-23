import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Persona, PersonaRelations, Usuarios} from '../models';
import {UsuariosRepository} from './usuarios.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly aliasFk: BelongsToAccessor<Usuarios, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Persona, dataSource);
    this.aliasFk = this.createBelongsToAccessorFor('aliasFk', usuariosRepositoryGetter,);
    this.registerInclusionResolver('aliasFk', this.aliasFk.inclusionResolver);
  }
}
