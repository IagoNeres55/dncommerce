import { Pedidos_Produtos } from "@modules/pedidos/infra/database/entities/Pedidos_Produtos"

export type IVendas = {
  id: number
  ped_prod_id: Pedidos_Produtos
  valor_total: number
  data_venda: Date
  metodo_pagamento: string
  status_pagamento: string
  created_at: Date
  updated_at: Date
}


