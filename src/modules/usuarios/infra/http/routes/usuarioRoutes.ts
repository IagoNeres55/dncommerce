import { Router } from 'express'
import UsuarioControllers from '../controller/UsuarioControllers'
import { criarUsuarioSchema } from '../schemas/usuarioSchema'
import { permissoesSchema } from '../schemas/permissoesSchema'
import { loginSchema } from '../schemas/loginSchema'

const UsuariosRoutes = Router()

const userController = new UsuarioControllers()

UsuariosRoutes.post('/criar', criarUsuarioSchema, userController.create)

UsuariosRoutes.get('/', userController.findAll)

UsuariosRoutes.put(
  '/permissoes',
  permissoesSchema,
  userController.updatePermission,
)

UsuariosRoutes.post('/login', loginSchema, userController.login )

export default UsuariosRoutes
