import { ICriarUsuario } from '../models/ICriarUsuario'
import { IUsuarios } from '../models/IUsuarios'

export default interface IUsuariosRepositories {
  criar(user: ICriarUsuario): Promise<IUsuarios>
  salvar(user: IUsuarios): Promise<IUsuarios>
  buscaPorId(id: number): Promise<IUsuarios | null>
  buscarPorEmail(email: string): Promise<IUsuarios | null>
}
