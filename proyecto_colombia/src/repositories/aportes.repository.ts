import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Aportes, AportesRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class AportesRepository extends DefaultCrudRepository<
  Aportes,
  typeof Aportes.prototype.id,
  AportesRelations
> {

  public readonly comentarioFk: BelongsToAccessor<Persona, typeof Aportes.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Aportes, dataSource);
    this.comentarioFk = this.createBelongsToAccessorFor('comentarioFk', personaRepositoryGetter,);
    this.registerInclusionResolver('comentarioFk', this.comentarioFk.inclusionResolver);
  }
}
