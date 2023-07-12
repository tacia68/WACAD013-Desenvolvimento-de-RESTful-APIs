// import { TipoUsuario } from './../models/TipoUsuario';
import { Request, Response, NextFunction } from 'express';

const checkAuth = (req:Request, res:Response, next:NextFunction) => {
   if(req.session.tipoUsuarioId === "ADMIN") next();
   else res.status(401).json({msg: 'Usuario Não autorizado'});
};

export default checkAuth;