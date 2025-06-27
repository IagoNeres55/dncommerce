import ClienteRoute from '@modules/clientes/infra/http/routes/clienteRoute'
import UsuariosRoutes from '@modules/usuarios/infra/http/routes/usuarioRoutes'

import { Router } from 'express'

const routes = Router()

routes.use('/usuario', UsuariosRoutes)

routes.use('/clientes', ClienteRoute)

export default routes
