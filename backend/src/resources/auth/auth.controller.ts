import { checkCredentials } from './auth.service';
import { Request, Response } from 'express';
import { buscaUsuarioPorEmail, createUsuario } from '../usuario/usuario.service';

const signup = async (req: Request, res: Response) => {
   const { nome, email, senha } = req.body;
   try {
      //Verificar se o usuario existe
      const usuario = await buscaUsuarioPorEmail(email);
      if(usuario) return res.status(400).json({ msg: 'Ja existe Usuario com email informado' });
      
      // const newUsuario = await createUsuario({ nome, email, senha, tipoUsuarioId: TipoUsuarios.CLIENTE });
      
      const newUsuario = await createUsuario({ nome, email, senha });
      res.status(201).json(newUsuario);
   } catch (error) {
      res.status(500).json(error);
   }
}
const login = async (req: Request, res: Response) => {
   const {email,senha} = req.body;
   try {
      const usuario = await checkCredentials({email, senha});
      if(!usuario) return res.status(401).json({msg: 'Credenciais invalidas'});
      req.session.tipoUsuarioId = usuario.tipoUsuarioId;
      res.status(200).json({msg: "Login efetuado com sucesso"});
   } catch (error) {
      res.status(500).json(error);
   }
}
const logout = async (req: Request, res: Response) => {}

export default { signup, login, logout }