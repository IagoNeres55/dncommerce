import { IVendas } from '../domain/models/IVendas'
import IVendasRepositories from '../domain/repositories/IVendasRepositories'

export class ListarVendasService {
  constructor(private vendaRepositories: IVendasRepositories) {}

  async execute(): Promise<IVendas[]> {
    return this.vendaRepositories.findAll()
  }
}
