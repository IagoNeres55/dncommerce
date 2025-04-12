import { Produtos } from 'modules/produtos/infra/database/entities/Produtos'

export type IEstoque = {
  produto_id: Produtos
  quantidade_disponivel: number
  created_at: Date
  updated_at: Date
}
