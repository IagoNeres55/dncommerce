import { IProdutos } from "@modules/produtos/domain/models/IProdutos"
import { IPedidos } from "./IPedidos"

export type IPedidos_Produtos = {
  id: number
  pedido: IPedidos
  produto: IProdutos
  quantidade: number
  created_at: Date
  updated_at: Date
}
