import { Router } from 'express'
import UsuarioControllers from '../controller/UsuarioControllers'
import { criarUsuarioSchema } from '../schemas/usuarioSchema'
import { permissoesSchema } from '../schemas/permissoesSchema'
import { loginSchema } from '../schemas/loginSchema'
import AuthMiddleware from '@shared/middlewares/AuthMiddleware'
import { checkRoles } from '@shared/middlewares/CheckRoles'
import { Perfil } from '../../database/entities/Usuarios'

const UsuariosRoutes = Router()

const userController = new UsuarioControllers()

UsuariosRoutes.post('/criar', criarUsuarioSchema, userController.create)

UsuariosRoutes.get(
  '/',
  AuthMiddleware.execute,
  checkRoles(Perfil.ADMIN, Perfil.MODERADOR),
  userController.findAll,
)

UsuariosRoutes.put(
  '/permissoes',
  permissoesSchema,
  AuthMiddleware.execute,
  checkRoles(Perfil.ADMIN, Perfil.MODERADOR),
  userController.updatePermission,
)

UsuariosRoutes.post('/login', loginSchema, userController.login)

export default UsuariosRoutes
