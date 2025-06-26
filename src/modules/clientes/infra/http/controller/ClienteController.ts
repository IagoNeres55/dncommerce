import CriarClienteService from '@modules/clientes/service/CriarClienteService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
export default class ClienteController {
  public async create(request: Request, response: Response): Promise<void> {
    const { endereco, telefone, id } = request.body
    const criarClienteService = container.resolve(CriarClienteService)

    const cliente = await criarClienteService.execute({
      endereco,
      telefone,
      id,
    })

    response.json(cliente)
    return
  }
}
