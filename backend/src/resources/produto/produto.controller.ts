import { Request, Response } from 'express';

import { createProduto, getAllProdutos, getProduto, updateProduto } from './produto.services';
import { CreateProdutoDTO, updateProdutoDTO } from './produto.types';

const index = async (req:Request,res: Response) => {
   try {
      const produto = await getAllProdutos();
      res.status(200).json(produto);
   } catch (error) {
      res.status(500).send(error);
   }
}

const create = async (req:Request,res: Response) => {
   try {
      const produto: CreateProdutoDTO = req.body;
      const newProduto = await createProduto(produto);
      res.status(201).json(newProduto);
   } catch (error) {
      res.status(500).send(error);
   }
}

const read = async (req:Request,res: Response) => {
   try {
      const { id } = req.params;
      const produto = await getProduto(id);
      if(produto === null){
         return res.status(400).json( { msg: "Produto nao existe" } ); // bad request
      }else{
         return res.status(200).json(produto);
      }
   } catch (error) {
      res.status(500).send(error);
   }
}

const update = async (req:Request,res: Response) => {
   try {
      const { id } = req.params;
      const produto: updateProdutoDTO = req.body;
      const updatedProduto = await updateProduto(id, produto);
      if(updatedProduto === null){
         return res.status(400).json( { msg: "Produto nao existe" } ); // bad request
      }
      return res.status(200).json( { msg: "Produto Atualizado" } );
   } catch (error) {
      res.status(500).send(error);
   }
}

const remove = async (req:Request,res: Response) => {

}

export default{ index, create, read, update, remove }