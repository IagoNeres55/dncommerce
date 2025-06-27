import { IClientes } from '../models/IClientes'
import { IPostCliente } from '../models/ICriarCliente'

export default interface IClienteRepositories {
  criarCliente(cliente: IPostCliente): Promise<IClientes>
  salvar(cliente: IClientes): Promise<IClientes>
}
