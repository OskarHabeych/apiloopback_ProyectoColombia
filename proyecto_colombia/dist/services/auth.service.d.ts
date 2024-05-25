import { Usuarios } from '../models';
import { UsuariosRepository } from '../repositories';
export declare class AuthService {
    usuarioRepository: UsuariosRepository;
    constructor(usuarioRepository: UsuariosRepository);
    GenerarClave(): any;
    CifrarClave(clave: String): any;
    GenerarTokenJWT(usuario: Usuarios): any;
    validarTokenJWT(token: string): any;
    IdentificarPersona(correo: string, password: string): false | Promise<(Usuarios & import("../models").UsuariosRelations) | null>;
}
