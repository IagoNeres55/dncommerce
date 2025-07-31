import { inject, injectable } from 'tsyringe'

import { ICriarProdutos, IProdutos } from '../domain/models/IProdutos'
import IProdutosRepositories from '../domain/repositories/IProdutosRepositories'
import { instanceToInstance } from 'class-transformer'
import AppError from '@shared/erros/AppError'

@injectable()
export default class CriarProdutoService {
  constructor(
    @inject('ProdutosRepositories')
    private readonly produtosRepositories: IProdutosRepositories,
  ) {}

  async execute(data: ICriarProdutos): Promise<IProdutos> {
    const produtoExistente = await this.produtosRepositories.buscarPorDescricao(
      data.descricao,
    )

    if (produtoExistente) {
      throw new AppError('Produto já cadastrado com essa descrição.', 409)
    }

    const produto = await this.produtosRepositories.criarProduto(data)
    return instanceToInstance(produto)
  }
}
