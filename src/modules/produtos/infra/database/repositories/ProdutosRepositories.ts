import {
  ICriarProdutos,
  IProdutos,
  IUpdateProdutos,
} from '@modules/produtos/domain/models/IProdutos'
import { Produtos } from '@modules/produtos/infra/database/entities/Produtos'
import { AppDataSource } from '@shared/infra/typeorm/data-source'
import { Repository } from 'typeorm'

export default class ProdutosRepositories {
  private ormRepository: Repository<Produtos>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Produtos)
  }

  async criarProduto(data: ICriarProdutos): Promise<IProdutos> {
    const produto = this.ormRepository.create(data)
    await this.ormRepository.save(produto)
    return produto
  }

  async listarProdutos(): Promise<IProdutos[]> {
    return await this.ormRepository.find()
  }

  async atualizarProduto(data: IUpdateProdutos): Promise<IProdutos> {
    await this.ormRepository.update(data.id, data)
    return this.ormRepository.findOneBy({ id: data.id }) as Promise<IProdutos>
  }

  async deletarProduto(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }

  async buscarPorDescricao(descricao: string): Promise<IProdutos | null> {
    return this.ormRepository.findOneBy({ descricao })
  }
  async buscarPorId(id: number): Promise<IProdutos | null> {
    return this.ormRepository.findOneBy({ id })
  }
}
