import { Router } from 'express'
import ClienteController from '../controller/ClienteController'

const clienteRoute = Router()

const clienteController = new ClienteController()

clienteRoute.post('/criar', clienteController.create)
