import { Router } from 'express'

const VendasRoute = Router()

import VendasController from '../controller/VendasController'

const vendasController = new VendasController()

VendasRoute.get('/', vendasController.listarVendas)
VendasRoute.patch('/cancelar/:id', vendasController.cancelar)
VendasRoute.patch('/atualizarStatus/:id', vendasController.atualizarStatus)
VendasRoute.get('/:id', vendasController.buscarPorId)

export default VendasRoute
