import { Usuarios } from '@modules/usuarios/infra/database/entities/Usuarios'

export type ICriarCliente = {
  telefone: string
  endereco: string
  id: number
}

export type IPostCliente = {
  Usuarios: Usuarios
  endereco: string
  telefone: string
}
