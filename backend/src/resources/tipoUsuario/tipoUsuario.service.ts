import { TipoUsuario } from "../../models/TipoUsuario";

const listTipoUsuario = async ():Promise<TipoUsuario[]> => {
   const tipoUsuario = await TipoUsuario.findAll();
   return tipoUsuario.map((p) => p.toJSON());
}

export { listTipoUsuario }