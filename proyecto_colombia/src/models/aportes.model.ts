import {Entity, model, property} from '@loopback/repository';

@model()
export class Aportes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  comentario?: string;

  /*@belongsTo(() => Persona, {name: 'comentarioFk'})
  comantario: string;*/


  constructor(data?: Partial<Aportes>) {
    super(data);
  }
}

export interface AportesRelations {
  // describe navigational properties here
}

export type AportesWithRelations = Aportes & AportesRelations;
