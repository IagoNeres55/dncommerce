import { ICriarProdutos, IProdutos, IUpdateProdutos } from '../models/IProdutos'

export default interface IProdutosRepositories {
  criarProduto(data: ICriarProdutos): Promise<IProdutos>
  listarProdutos(): Promise<IProdutos[]>
  atualizarProduto(data: IUpdateProdutos): Promise<IProdutos>
  deletarProduto(id: number): Promise<void>
  buscarPorDescricao(descricao: string): Promise<IProdutos | null>
  buscarPorId(id: number): Promise<IProdutos | null>
}
