import AppError from '@shared/erros/AppError'
import { IVendas } from '../domain/models/IVendas'
import IVendasRepositories from '../domain/repositories/IVendasRepositories'

export class BuscarVendaPorIdService {
  constructor(private vendaRepositories: IVendasRepositories) {}

  async execute(id: number): Promise<IVendas> {
    const venda = await this.vendaRepositories.findById(id)

    if (!venda) {
      throw new AppError('Venda não encontrada.')
    }

    return venda
  }
}
