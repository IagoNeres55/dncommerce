import { container } from 'tsyringe'
import IUsuariosRepositories from '@modules/usuarios/domain/repositories/IUsuariosRepositories'
import { UsuarioRepositories } from '@modules/usuarios/infra/database/repositories/usuarioRepositories'


container.registerSingleton<IUsuariosRepositories>(
  'UsuariosRepositories',
  UsuarioRepositories,
)