import { Produto } from '../../models/Produto';

export type CreateProdutoDTO = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type updateProdutoDTO = Pick<Produto, 'nome' | 'preco' | 'estoque'>;