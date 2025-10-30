import { Vendas } from '@modules/vendas/infra/database/entities/Vendas'
import { IVendas } from '../models/IVendas'

export default interface IVendasRepositories {
  create(venda: Vendas): Promise<IVendas>
  findById(id: number): Promise<Vendas | undefined>
  findAll(): Promise<Vendas[]>
  update(venda: Vendas): Promise<Vendas>
  delete(id: number): Promise<void>
  save(venda: Vendas): Promise<Vendas>
}
