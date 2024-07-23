import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Persona} from './persona.model';

@model({
  settings: {
    foreignKeys: {
      fk_aportes_id_persona: {
        name:'fk_aportes_id_persona',
        entity:'persona',
        entityKey:'id',
        foreignKey:'id_persona',
      }
    }
  }
})
export class Aportes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  comentario: string;

  @belongsTo(() => Persona, {name: 'comentarioFk'})
  id_persona: string;

  constructor(data?: Partial<Aportes>) {
    super(data);
  }
}

export interface AportesRelations {
  // describe navigational properties here
}

export type AportesWithRelations = Aportes & AportesRelations;
