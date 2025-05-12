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

    console.log(usuario)

    response.json(usuario)
    return
  }
}
