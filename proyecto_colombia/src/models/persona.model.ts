import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Usuarios} from './usuarios.model';

@model({
  settings: {
    foreignKeys: {
      fk_persona_id_usuarios: {
        name:'fk_persona_id_usuarios',
        entity:'usuarios',
        entityKey:'id',
        foreignKey:'id_usuarios',
      }
    }
  }
})
export class Persona extends Entity {
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
  alias: string;

  @belongsTo(() => Usuarios, {name: 'aliasFk'})
  id_usuarios: number;

  @property({
    type: 'string',
  })
  actividad?: string;

  @property({
    type: 'string',
  })
  pais?: string;


  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
