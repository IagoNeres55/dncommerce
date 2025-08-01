import AtualizarProdutosService from '@modules/produtos/service/AtualizarProdutosService'
import BuscarProdutoService from '@modules/produtos/service/BuscarProdutosService'
import CriarProdutoService from '@modules/produtos/service/CriarProdutoService'
import DeletarProdutoService from '@modules/produtos/service/DeletarProdutoService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class ProdutosController {
  public async create(request: Request, response: Response): Promise<void> {
    const data = request.body
    const criarProdutoService = container.resolve(CriarProdutoService)
    const produto = await criarProdutoService.execute(data)

    response.json(produto)
    return
  }

  public async index(_request: Request, response: Response): Promise<void> {
    const listarProdutosService = container.resolve(BuscarProdutoService)
    const produtos = await listarProdutosService.execute()

    response.json(produtos)
    return
  }

  public async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const data = request.body
    const atualizarProdutoService = container.resolve(AtualizarProdutosService)
    const produto = await atualizarProdutoService.execute({ id, ...data })

    response.json(produto)
    return
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const deletarProdutoService = container.resolve(DeletarProdutoService)
    await deletarProdutoService.execute(Number(id))

    response.status(204).send()
    return
  }


}
