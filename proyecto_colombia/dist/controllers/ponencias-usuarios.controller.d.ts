import { Ponencias, Usuarios } from '../models';
import { PonenciasRepository } from '../repositories';
export declare class PonenciasUsuariosController {
    ponenciasRepository: PonenciasRepository;
    constructor(ponenciasRepository: PonenciasRepository);
    getUsuarios(id: typeof Ponencias.prototype.id): Promise<Usuarios>;
}
