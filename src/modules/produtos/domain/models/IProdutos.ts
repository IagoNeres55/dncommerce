import { ICategoria } from "./ICategoria"

export type IProdutos = {
  id: number
  descricao: string
  preco: number
  quantidade_estoque: number
  categoria: ICategoria
  created_at: Date
  updated_at: Date
}
