import { Usuarios } from "modules/usuarios/infra/database/entities/Usuarios"

export type IClientes = {
  id: number
  telefone: string
  endereco: string
  Usuarios: Usuarios
  created_at: Date
  updated_at: Date
}
