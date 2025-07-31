import { inject, injectable } from 'tsyringe'
import IProdutosRepositories from '../domain/repositories/IProdutosRepositories'
import AppError from '@shared/erros/AppError'

@injectable()
export default class DeletarProdutoService {
  constructor(
    @inject('ProdutosRepositories')
    private readonly produtosRepositories: IProdutosRepositories,
  ) {}

  async execute(id: number): Promise<void> {
    const produtoExistente = await this.produtosRepositories.buscarPorId(id)

    if (!produtoExistente) {
      throw new AppError('Produto não encontrado')
    }

    await this.produtosRepositories.deletarProduto(id)
  }
}
