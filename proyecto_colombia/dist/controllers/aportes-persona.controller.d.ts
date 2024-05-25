import { Aportes, Persona } from '../models';
import { AportesRepository } from '../repositories';
export declare class AportesPersonaController {
    aportesRepository: AportesRepository;
    constructor(aportesRepository: AportesRepository);
    getPersona(id: typeof Aportes.prototype.id): Promise<Persona>;
}
