import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Usuarios} from './usuarios.model';

@model({
  settings: {
    foreignKeys: {
      fk_ponencias_id_usuarios: {
        name:'fk_ponencias_id_usuarios',
        entity:'usuarios',
        entityKey:'id',
        foreignKey:'id_usuarios',
      }
    }
  }
})
export class Ponencias extends Entity {
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
  resena: string;

  @property({
    type: 'string',
  })
  ponencia?: string;

  @belongsTo(() => Usuarios, {name: 'resenaFk'})
  id_usuarios: number;

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
