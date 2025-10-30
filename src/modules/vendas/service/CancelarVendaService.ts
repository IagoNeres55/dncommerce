import AppError from '@shared/erros/AppError'
import { IVendas } from '../domain/models/IVendas'
import IVendasRepositories from '../domain/repositories/IVendasRepositories'
import { StatusPagamento } from '../infra/database/entities/Vendas'

export class CancelarVendaService {
  constructor(private vendaRepositories: IVendasRepositories) {}

  async execute(id: number): Promise<IVendas> {
    const venda = await this.vendaRepositories.findById(Number(id))

    if (!venda) {
      throw new AppError('Venda não encontrada.')
    }

    venda.status_pagamento = StatusPagamento.CANCELADO

    await this.vendaRepositories.save(venda)

    return venda
  }
}
