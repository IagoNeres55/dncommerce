import { inject, injectable } from 'tsyringe'
import IClienteRepositories from '../domain/repositories/IClienteRepositories'
import { ICriarCliente } from '../domain/models/ICriarCliente'
import { IClientes } from '../domain/models/IClientes'
import AppError from '@shared/erros/AppError'
import IUsuariosRepositories from '@modules/usuarios/domain/repositories/IUsuariosRepositories'
import { instanceToInstance } from 'class-transformer'

@injectable()
export default class CriarClienteService {
  constructor(
    @inject('ClienteRepositories')
    private readonly clienteRepositories: IClienteRepositories,

    @inject('UsuariosRepositories')
    private readonly usuarioRepositories: IUsuariosRepositories,
  ) {}

  async execute(data: ICriarCliente): Promise<IClientes> {
    const usuario = await this.usuarioRepositories.buscarPorId(data.id)
    if (!usuario) {
      throw new AppError('Usuário não encontrado')
    }
    const cliente = await this.clienteRepositories.criarCliente({
      Usuarios: usuario,
      endereco: data.endereco,
      telefone: data.telefone,
    })
    return instanceToInstance(cliente)
  }
}
