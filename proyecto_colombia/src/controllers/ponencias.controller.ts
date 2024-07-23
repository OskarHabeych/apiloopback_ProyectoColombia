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
import {Ponencias} from '../models';
import {PonenciasRepository} from '../repositories';

@authenticate("admin")
export class PonenciasController {
  constructor(
    @repository(PonenciasRepository)
    public ponenciasRepository: PonenciasRepository,
  ) { }

  @authenticate.skip()
  @post('/ponencias')
  @response(200, {
    description: 'Ponencias model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ponencias)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ponencias, {
            title: 'NewPonencias',
            exclude: ['id'],
          }),
        },
      },
    })
    ponencias: Omit<Ponencias, 'id'>,
  ): Promise<Ponencias> {
    return this.ponenciasRepository.create(ponencias);
  }

  @get('/ponencias/count')
  @response(200, {
    description: 'Ponencias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ponencias) where?: Where<Ponencias>,
  ): Promise<Count> {
    return this.ponenciasRepository.count(where);
  }

  @get('/ponencias')
  @response(200, {
    description: 'Array of Ponencias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ponencias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ponencias) filter?: Filter<Ponencias>,
  ): Promise<Ponencias[]> {
    return this.ponenciasRepository.find(filter);
  }

  @patch('/ponencias')
  @response(200, {
    description: 'Ponencias PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ponencias, {partial: true}),
        },
      },
    })
    ponencias: Ponencias,
    @param.where(Ponencias) where?: Where<Ponencias>,
  ): Promise<Count> {
    return this.ponenciasRepository.updateAll(ponencias, where);
  }

  @get('/ponencias/{id}')
  @response(200, {
    description: 'Ponencias model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ponencias, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ponencias, {exclude: 'where'}) filter?: FilterExcludingWhere<Ponencias>
  ): Promise<Ponencias> {
    return this.ponenciasRepository.findById(id, filter);
  }

  @patch('/ponencias/{id}')
  @response(204, {
    description: 'Ponencias PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ponencias, {partial: true}),
        },
      },
    })
    ponencias: Ponencias,
  ): Promise<void> {
    await this.ponenciasRepository.updateById(id, ponencias);
  }

  @put('/ponencias/{id}')
  @response(204, {
    description: 'Ponencias PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ponencias: Ponencias,
  ): Promise<void> {
    await this.ponenciasRepository.replaceById(id, ponencias);
  }

  @del('/ponencias/{id}')
  @response(204, {
    description: 'Ponencias DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ponenciasRepository.deleteById(id);
  }
}
