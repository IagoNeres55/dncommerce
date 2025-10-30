import AppError from '@shared/erros/AppError'
import { IVendas } from '../domain/models/IVendas'
import IVendasRepositories from '../domain/repositories/IVendasRepositories'
import { StatusPagamento } from '../infra/database/entities/Vendas'

interface IRequest {
  id: string
  status: StatusPagamento
}

export class AtualizarStatusVendaService {
  constructor(private vendaRepositories: IVendasRepositories) {}

  async execute({ id, status }: IRequest): Promise<IVendas> {
    const venda = await this.vendaRepositories.findById(id)

    if (!venda) {
      throw new AppError('Venda não encontrada.')
    }

    venda.status_pagamento = status

    await this.vendaRepositories.save(venda)

    return venda
  }
}
