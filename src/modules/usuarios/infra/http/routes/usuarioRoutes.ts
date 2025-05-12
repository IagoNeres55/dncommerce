import { Router } from 'express'
import UsuarioControllers from '../controller/UsuarioControllers'
import { criarUsuarioSchema } from '../schemas/usuarioSchema'

const UsuariosRoutes = Router()

const userController = new UsuarioControllers()

UsuariosRoutes.post('/criar', criarUsuarioSchema, userController.create)


export default UsuariosRoutes