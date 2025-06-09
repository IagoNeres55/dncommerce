import { Router } from 'express'
import UsuarioControllers from '../controller/UsuarioControllers'
import { criarUsuarioSchema } from '../schemas/usuarioSchema'
import { permissoesSchema } from '../schemas/permissoesSchema'

const UsuariosRoutes = Router()

const userController = new UsuarioControllers()

UsuariosRoutes.post('/criar', criarUsuarioSchema, userController.create)

UsuariosRoutes.get('/', userController.findAll)

UsuariosRoutes.put(
  '/permissoes',
  userController.updatePermission,
)

export default UsuariosRoutes
