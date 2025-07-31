import { Router } from 'express'
import ClienteController from '../controller/ClienteController'

const ClienteRoute = Router()

const clienteController = new ClienteController()

ClienteRoute.post('/', clienteController.create)

ClienteRoute.get('/', clienteController.index)

export default ClienteRoute
