import bcript from "bcryptjs";
import { Usuario } from "../../models/Usuario";

interface LoginDto {
   email: string;
   senha: string;
}


export const checkCredentials = async ({email,senha}: LoginDto):Promise<Usuario | null> => {
 const usuario = await Usuario.findOne({ where: { email } });
 if(!usuario) return null;
  const ok = await bcript.compare(senha, usuario.senha);
  return ok ? usuario : null; 
}