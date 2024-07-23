import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Aportes} from '../models';
import {AportesRepository} from '../repositories';

@authenticate("admin")
export class AportesController {
  constructor(
    @repository(AportesRepository)
    public aportesRepository: AportesRepository,
  ) { }

  @post('/aportes')
  @response(200, {
    description: 'Aportes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aportes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aportes, {
            title: 'NewAportes',
            exclude: ['id'],
          }),
        },
      },
    })
    aportes: Omit<Aportes, 'id'>,
  ): Promise<Aportes> {
    return this.aportesRepository.create(aportes);
  }

  @get('/aportes/count')
  @response(200, {
    description: 'Aportes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aportes) where?: Where<Aportes>,
  ): Promise<Count> {
    return this.aportesRepository.count(where);
  }

  @get('/aportes')
  @response(200, {
    description: 'Array of Aportes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aportes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aportes) filter?: Filter<Aportes>,
  ): Promise<Aportes[]> {
    return this.aportesRepository.find(filter);
  }

  @patch('/aportes')
  @response(200, {
    description: 'Aportes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aportes, {partial: true}),
        },
      },
    })
    aportes: Aportes,
    @param.where(Aportes) where?: Where<Aportes>,
  ): Promise<Count> {
    return this.aportesRepository.updateAll(aportes, where);
  }

  @get('/aportes/{id}')
  @response(200, {
    description: 'Aportes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aportes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Aportes, {exclude: 'where'}) filter?: FilterExcludingWhere<Aportes>
  ): Promise<Aportes> {
    return this.aportesRepository.findById(id, filter);
  }

  @patch('/aportes/{id}')
  @response(204, {
    description: 'Aportes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aportes, {partial: true}),
        },
      },
    })
    aportes: Aportes,
  ): Promise<void> {
    await this.aportesRepository.updateById(id, aportes);
  }

  @put('/aportes/{id}')
  @response(204, {
    description: 'Aportes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aportes: Aportes,
  ): Promise<void> {
    await this.aportesRepository.replaceById(id, aportes);
  }

  @del('/aportes/{id}')
  @response(204, {
    description: 'Aportes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aportesRepository.deleteById(id);
  }
}
