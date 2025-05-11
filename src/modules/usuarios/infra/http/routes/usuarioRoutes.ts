import { Router } from 'express'
import UsuarioControllers from '../controller/UsuarioControllers'
import { criarUsuarioSchema } from '../schemas/usuarioSchema'

const routes = Router()

const userController = new UsuarioControllers()

routes.post('/', criarUsuarioSchema, userController.create)
