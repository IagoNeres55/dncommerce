import { inject, injectable } from 'tsyringe'
import IProdutosRepositories from '../domain/repositories/IProdutosRepositories'
import AppError from '@shared/erros/AppError'
import { IProdutos, IUpdateProdutos } from '../domain/models/IProdutos'

@injectable()
export default class AtualizarProdutosService {
  constructor(
    @inject('ProdutosRepositories')
    private readonly produtosRepositories: IProdutosRepositories,
  ) {}

  async execute(data: IUpdateProdutos): Promise<IProdutos> {
    const produtoExistente = await this.produtosRepositories.buscarPorId(
      data.id,
    )

    if (!produtoExistente) {
      throw new AppError('Produto não encontrado')
    }

    if (produtoExistente.descricao !== data.descricao) {
      const produtoComDescricaoExistente =
        await this.produtosRepositories.buscarPorDescricao(
          data.descricao as string,
        )

      if (produtoComDescricaoExistente) {
        throw new AppError('Produto com essa descrição já existe', 409)
      }
    }

    return await this.produtosRepositories.atualizarProduto(data)
  }
}
