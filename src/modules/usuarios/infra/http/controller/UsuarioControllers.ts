import { Perfil } from './../../database/entities/Usuarios'
import AtualizarPermissaoUsuarioService from '@modules/usuarios/services/AtualizarPermissaoUsuarioService'
import BuscarUsuarioService from '@modules/usuarios/services/BuscarUsuarioService'
import CriarUsuarioService from '@modules/usuarios/services/CriarUsuarioService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class UsuarioControllers {
  // public async index(_: any, response: any): Promise<any> {
  //   const listUsersSerivice = container.resolve("ListarUsuariosService");

  // }

  public async create(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body
    const criarUsuarioService = container.resolve(CriarUsuarioService)

    const usuario = await criarUsuarioService.execute({
      name,
      email,
      password,
    })

    response.json(usuario)
    return
  }

  public async findAll(_request: Request, response: Response): Promise<void> {
    const usuario = container.resolve(BuscarUsuarioService)

    const usuarios = await usuario.execute()

    response.json(usuarios)
    return
  }

  public async updatePermission(
    request: Request,
    response: Response,
  ): Promise<void> {
    const { idUsuario, perfil } = request.body

    const usuario = container.resolve(AtualizarPermissaoUsuarioService)

    const updateUsuario = await usuario.execute(idUsuario, perfil)

    response.json({
      messagem: 'Usuario atualizado com sucesso',
      ...updateUsuario,
    })
  }
}
