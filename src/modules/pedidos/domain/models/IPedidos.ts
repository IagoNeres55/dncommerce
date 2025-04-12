import { IClientes } from "modules/clientes/domain/models/IClientes"
import { IPedido_Status } from "./IPedido_Status"

export type IPedidos = {
  id: number
    clientes: IClientes
    data_pedido: Date
    status: IPedido_Status
    total: number
    created_at: Date
    updated_at: Date
}
