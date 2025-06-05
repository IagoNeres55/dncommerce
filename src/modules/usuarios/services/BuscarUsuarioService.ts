import { inject, injectable } from 'tsyringe'
import { IUsuarios } from '../domain/models/IUsuarios'
import IUsuariosRepositories from '../domain/repositories/IUsuariosRepositories'
import { instanceToInstance } from 'class-transformer'

@injectable()
export default class BuscarUsuarioService {
  constructor(
    @inject('UsuariosRepositories')
    private readonly usuariosRepositories: IUsuariosRepositories,
  ) {}

  async execute(): Promise<IUsuarios[]> {
    const usuarios = await this.usuariosRepositories.buscarTodos()
    return instanceToInstance(usuarios)
  }
}
