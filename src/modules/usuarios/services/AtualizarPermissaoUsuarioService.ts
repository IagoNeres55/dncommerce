import { inject, injectable } from 'tsyringe'
import IUsuariosRepositories from '../domain/repositories/IUsuariosRepositories'
import { IUsuarios } from '../domain/models/IUsuarios'
import { instanceToInstance } from 'class-transformer'
import AppError from '@shared/erros/AppError'

@injectable()
export default class AtualizarPermissaoUsuarioService {
  constructor(
    @inject('UsuariosRepositories')
    private readonly UsuariosRepositories: IUsuariosRepositories,
  ) {}

  async execute(idUsuario: number, perfil: string): Promise<IUsuarios | null> {
    const usuario = await this.UsuariosRepositories.buscarPorId(idUsuario)

    if (!usuario) {
      throw new AppError('Usuário não encontrado', 400)
    }

    usuario.perfil = perfil

    const usuarioAtualizado = await this.UsuariosRepositories.salvar(usuario)
    if (!usuarioAtualizado) {
      throw new AppError('Erro ao atualizar o usuário', 500)
    }
    return instanceToInstance(usuarioAtualizado)
  }
}
