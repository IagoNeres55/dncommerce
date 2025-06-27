import { Router } from 'express'
import ClienteController from '../controller/ClienteController'

const ClienteRoute = Router()

const clienteController = new ClienteController()

ClienteRoute.post('/teste', clienteController.create)

export default ClienteRoute
