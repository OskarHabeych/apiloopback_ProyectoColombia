import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Usuarios} from './usuarios.model';

@model()
export class Ponencias extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  /*@property({
    type: 'string',
    required: true,
  })
  resena: string;*/

  @property({
    type: 'any',
  })
  ponencia?: any;

  @belongsTo(() => Usuarios, {name: 'resenaFk'})
  resena: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<Ponencias>) {
    super(data);
  }
}

export interface PonenciasRelations {
  // describe navigational properties here
}

export type PonenciasWithRelations = Ponencias & PonenciasRelations;
