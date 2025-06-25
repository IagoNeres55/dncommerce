import { inject, injectable } from 'tsyringe'
import IUsuariosRepositories from '../domain/repositories/IUsuariosRepositories'
import bcrypt from 'bcrypt'
import { ILoginUsuario } from '../domain/models/ICriarUsuario'
import AppError from '@shared/erros/AppError'
import { Secret } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import { ISessionResponse } from '../domain/models/ISessionResponse'

const JWT_SECRET = process.env.SECRET_KEY_JWT as Secret

@injectable()
export default class SessaoUsuarioService {
  constructor(
    @inject('UsuariosRepositories')
    private readonly usuariosRepositories: IUsuariosRepositories,
  ) {}

  async execute({ email, password }: ILoginUsuario): Promise<ISessionResponse> {
    const user = await this.usuariosRepositories.buscarPorEmail(email)
    if (!user) {
      throw new AppError('Email ou senha incorretos', 409)
    }

    const passwordMatched = bcrypt.compareSync(password, user.password)

    if (!passwordMatched) {
      throw new AppError('E-mail ou senha incorreto', 400)
    }

    const token = jwt.sign({}, JWT_SECRET, {
      subject: String(user.id),
      expiresIn: '24h',
    })

    return {
      access_token: 'Bearer',
      token,
    }
  }
}
