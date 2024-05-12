import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Persona, PersonaRelations, Usuarios} from '../models';
import {UsuariosRepository} from './usuarios.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly aliasFk: BelongsToAccessor<Usuarios, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Persona, dataSource);
    this.aliasFk = this.createBelongsToAccessorFor('aliasFk', usuariosRepositoryGetter,);
    this.registerInclusionResolver('aliasFk', this.aliasFk.inclusionResolver);
  }
}
