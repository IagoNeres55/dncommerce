import { inject, injectable } from 'tsyringe'
import { IProdutos } from '../domain/models/IProdutos'
import IProdutosRepositories from '../domain/repositories/IProdutosRepositories'

@injectable()
export default class BuscarProdutoService {
  constructor(
    @inject('ProdutosRepositories')
    private readonly produtosRepositories: IProdutosRepositories,
  ) {}

  async execute(): Promise<IProdutos[] | null> {
    return await this.produtosRepositories.listarProdutos()
  }
}
