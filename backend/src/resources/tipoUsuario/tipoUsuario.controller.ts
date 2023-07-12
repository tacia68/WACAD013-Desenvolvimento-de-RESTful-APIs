import { Request, Response } from 'express';
import { listTipoUsuario } from './tipoUsuario.service';

const index = async (req:Request,res: Response) => {
   try {
      const tipos = await listTipoUsuario();
      res.status(200).json(tipos);
   } catch (error) {
      console.log(error);
   }
}

export default { index }