import { Router } from 'express'
import ProdutosController from '../controller/ProdutosController'

const ProdutosRoute = Router()

const produtosController = new ProdutosController()

ProdutosRoute.post('/', produtosController.create)
ProdutosRoute.get('/', produtosController.index)
ProdutosRoute.put('/:id', produtosController.update)
ProdutosRoute.delete('/:id', produtosController.delete)

// criar categorias produtos



export default ProdutosRoute
