import { Repository } from 'typeorm'
import { Clientes } from '../entities/Clientes'
import { AppDataSource } from '@shared/infra/typeorm/data-source'
import IClienteRepositories from '@modules/clientes/domain/repositories/IClienteRepositories'

export class ClienteRepositories implements IClienteRepositories {
  private ormRepository: Repository<Clientes>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Clientes)
  }

  public async CriarCliente(cliente: Clientes): Promise<Clientes> {
    const criarCliente = this.ormRepository.create(cliente)
    await this.ormRepository.save(criarCliente)
    return criarCliente
  }

  public async salvar(cliente: Clientes): Promise<Clientes> {
    return this.ormRepository.save(cliente)
  }
}
