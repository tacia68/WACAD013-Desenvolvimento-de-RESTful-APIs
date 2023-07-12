import { Usuario } from '../../models/Usuario';

export type CreateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;
export type UpdateUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;
