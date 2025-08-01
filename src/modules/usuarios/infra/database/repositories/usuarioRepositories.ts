import { Repository } from 'typeorm'
import { Usuarios } from '../entities/Usuarios'
import IUsuariosRepositories from '@modules/usuarios/domain/repositories/IUsuariosRepositories'
import { AppDataSource } from '@shared/infra/typeorm/data-source'

export class UsuarioRepositories implements IUsuariosRepositories {
  private ormRepository: Repository<Usuarios>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Usuarios)
  }

  public async criar(user: Usuarios): Promise<Usuarios> {
    const usuario = this.ormRepository.create(user)
    await this.ormRepository.save(usuario)
    return usuario
  }
  public async salvar(user: Usuarios): Promise<Usuarios> {
    return this.ormRepository.save(user)
  }

  public async buscarTodos(): Promise<Usuarios[]> {
    const usuario = await this.ormRepository.find()
    return usuario
  }

  async buscarPorEmail(email: string): Promise<Usuarios | null> {
    const usuario = await this.ormRepository.findOneBy({ email })
    return usuario
  }

  async buscarPorId(id: number): Promise<Usuarios | null> {
    const usuario = await this.ormRepository.findOneBy({ id })
    return usuario
  }
}
