import { ListarVendasService } from '@modules/vendas/service/ListarVendasService'
import { container } from 'tsyringe'

export default class VendasController {
  public async listarVendas(
    _request: Request,
    response: Response,
  ): Promise<void> {
    const listarVendas = container.resolve(ListarVendasService)
    const vendas = await listarVendas.execute()

    return response.json(vendas)
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
    const venda = await atualizarStatusVenda.execute(Number(id), status)

    response.json(venda)
    return
  }

  public async buscarPorId(
    request: Request,
    response: Response,
  ): Promise<void> {
    const { id } = request.params
    const buscarVenda = container.resolve(BuscarVendaService)
    const venda = await buscarVenda.execute(Number(id))

    response.json(venda)
    return
  }
}
