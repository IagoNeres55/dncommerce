import { UsuarioRepositories } from './../../usuarios/infra/database/repositories/usuarioRepositories'
import { inject, injectable } from 'tsyringe'
import IClienteRepositories from '../domain/repositories/IClienteRepositories'
import { ICriarCliente } from '../domain/models/ICriarCliente'
import { IClientes } from '../domain/models/IClientes'
import AppError from '@shared/erros/AppError'

@injectable()
export default class CriarClienteService {
  constructor(
    @inject('ClienteRepositories')
    private readonly clienteRepository: IClienteRepositories,
    private readonly usuarioRepositories: UsuarioRepositories,
  ) {}

  async execute(data: ICriarCliente): Promise<IClientes> {
    const usuario = await this.usuarioRepositories.buscarPorId(data.id)

    if (!usuario) {
      throw new AppError('Usuário não encontrado')
    }

    const cliente = await this.clienteRepository.CriarCliente({
      ...data,
    })

    return cliente
  }
}
