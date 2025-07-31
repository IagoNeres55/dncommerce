import { container } from 'tsyringe'
import IUsuariosRepositories from '@modules/usuarios/domain/repositories/IUsuariosRepositories'
import { UsuarioRepositories } from '@modules/usuarios/infra/database/repositories/usuarioRepositories'
import IClienteRepositories from '@modules/clientes/domain/repositories/IClienteRepositories'
import { ClienteRepositories } from '@modules/clientes/infra/database/repositories/ClienteRepositories'
import IProdutosRepositories from '@modules/produtos/domain/repositories/IProdutosRepositories'
import ProdutosRepositories from '@modules/produtos/infra/database/repositories/ProdutosRepositories'

container.registerSingleton<IUsuariosRepositories>(
  'UsuariosRepositories',
  UsuarioRepositories,
)

container.registerSingleton<IClienteRepositories>(
  'ClienteRepositories',
  ClienteRepositories,
)

container.registerSingleton<IProdutosRepositories>(
  'ProdutosRepositories',
  ProdutosRepositories,
)
