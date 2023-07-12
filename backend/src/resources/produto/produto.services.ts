import { Produto } from '../../models/Produto';
import { CreateProdutoDTO, updateProdutoDTO } from './produto.types';

const getAllProdutos = async (): Promise<Produto[]> => {
   const produtos = await Produto.findAll();
   return produtos.map((produto) => produto.toJSON());
}

const createProduto = async (produto: CreateProdutoDTO): Promise<CreateProdutoDTO> => {
   return await Produto.create(produto);
}

const getProduto = async (id: string): Promise<Produto | null> => {
   return await Produto.findOne({ where: { id } });
}

const updateProduto = async (id: string, produto: updateProdutoDTO): Promise<updateProdutoDTO | null> => {
   const produtoFromDB = await getProduto(id);

   if (!produtoFromDB) {
      return null;
   }

   const [affectCount] = await Produto.update(produto, { where: { id } });
   return affectCount > 0 ? produto : null;
}

export { getAllProdutos, createProduto, getProduto, updateProduto }