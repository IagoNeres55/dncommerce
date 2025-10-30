import { AtualizarStatusVendaService } from '@modules/vendas/service/AtualizarStatusVendaService'
import { BuscarVendaPorIdService } from '@modules/vendas/service/BuscarVendaPorIdService'
import { CancelarVendaService } from '@modules/vendas/service/CancelarVendaService'
import { ListarVendasService } from '@modules/vendas/service/ListarVendasService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class VendasController {
  public async listarVendas(
    _request: Request,
    response: Response,
  ): Promise<void> {
    const listarVendas = container.resolve(ListarVendasService)
    const vendas = await listarVendas.execute()
    response.json(vendas)
    return
  }

  public async cancelar(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const cancelarVenda = container.resolve(CancelarVendaService)
    const venda = await cancelarVenda.execute(Number(id))

    response.json(venda)
    return
  }

  public async atualizarStatus(
    request: Request,
    response: Response,
  ): Promise<void> {
    const { id } = request.params
    const { status } = request.body
    const atualizarStatusVenda = container.resolve(AtualizarStatusVendaService)
    const venda = await atualizarStatusVenda.execute({ id, status })

    response.json(venda)
    return
  }

  public async buscarPorId(
    request: Request,
    response: Response,
  ): Promise<void> {
    const { id } = request.params
    const buscarVenda = container.resolve(BuscarVendaPorIdService)
    const venda = await buscarVenda.execute(Number(id))

    response.json(venda)
    return
  }
}
