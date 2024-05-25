import { Persona, Usuarios } from '../models';
import { PersonaRepository } from '../repositories';
export declare class PersonaUsuariosController {
    personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    getUsuarios(id: typeof Persona.prototype.id): Promise<Usuarios>;
}
