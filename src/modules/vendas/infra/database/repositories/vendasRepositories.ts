import { StatusPagamento, Vendas } from './../entities/Vendas'

import { IVendas } from '@modules/vendas/domain/models/IVendas'
import { AppDataSource } from '@shared/infra/typeorm/data-source'
import { Repository } from 'typeorm'

export default class VendasRepositories {
  private ormRepository: Repository<Vendas>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Vendas)
  }

  async listarVendas(): Promise<IVendas[]> {
    return await this.ormRepository.find()
  }

  async cancelar(id: number): Promise<IVendas> {
    const venda = await this.ormRepository.findOneBy({ id })
    if (!venda) {
      throw new Error('Venda não encontrada')
    }
    venda.status_pagamento = StatusPagamento.CANCELADO
    await this.ormRepository.save(venda)
    return venda
  }

  async atualizarStatusVenda(id: number, status: string): Promise<IVendas> {
    const venda = await this.ormRepository.findOneBy({ id })
    if (!venda) {
      throw new Error('Venda não encontrada')
    }
    venda.status_pagamento = status as StatusPagamento
    await this.ormRepository.save(venda)
    return venda
  }

  async buscarVendaPorId(id: number): Promise<IVendas | null> {
    return await this.ormRepository.findOneBy({ id })
  }
}
