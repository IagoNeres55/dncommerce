import UsuariosRoutes from '@modules/usuarios/infra/http/routes/usuarioRoutes'
import { Router } from 'express'

const routes = Router()

routes.use('/usuario', UsuariosRoutes)

export default routes
