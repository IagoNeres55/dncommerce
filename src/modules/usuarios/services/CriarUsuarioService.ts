import { inject, injectable } from 'tsyringe'
import { IUsuarios } from '../domain/models/IUsuarios'
import IUsuariosRepositories from '../domain/repositories/IUsuariosRepositories'
import { hash } from 'bcrypt'
import { instanceToInstance } from 'class-transformer'
import { ICriarUsuario } from '../domain/models/ICriarUsuario'
import AppError from '@shared/erros/AppError'

@injectable()
export default class CriarUsuarioService {
  constructor(
    @inject('UsuariosRepositories')
    private readonly usuariosRepositories: IUsuariosRepositories,
  ) {}

  async execute({ name, email, password }: ICriarUsuario): Promise<IUsuarios> {
    // validar se o email já existe
    const emailExistente = await this.usuariosRepositories.buscarPorEmail(email)
    if (emailExistente) {
      throw new AppError('Email já cadastrado', 409)
    }
    const hashedPassword = await hash(password, 10)

    const usuario = await this.usuariosRepositories.criar({
      name,
      email,
      password: hashedPassword,
    })

     return instanceToInstance(usuario)
  }
}
