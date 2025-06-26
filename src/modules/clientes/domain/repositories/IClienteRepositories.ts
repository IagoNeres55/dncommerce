import { IClientes } from '../models/IClientes'
import { ICriarCliente } from '../models/ICriarCliente'

export default interface IClienteRepositories {
  CriarCliente(cliente: ICriarCliente): Promise<IClientes>
  salvar(cliente: IClientes): Promise<IClientes>
}
