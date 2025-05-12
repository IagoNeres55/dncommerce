import 'reflect-metadata'
import 'express-async-errors'
import cors from 'cors'
// import 'reflect-metadata'
// import 'express-async-errors'
import express from 'express'
import { AppDataSource } from '../typeorm/data-source'
import routes from './routes'
// import cors from 'cors'


import '../../container'
import TratamentoDeErroGlobal from '@shared/middlewares/TratamentoDeErroGlobal'
import { errors } from 'celebrate'

AppDataSource.initialize()
  .then(async () => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    // app.use(rateLimiter)


    app.use(routes)
    // errors do celebrate - intercepta os erros caso seja de schema
    app.use(errors())
    app.use(TratamentoDeErroGlobal.LidarComErros)

    console.log('connection to the database 🎉🎉')
    app.listen(3333, () => {
      console.log('Servidor rodando na porta 3333')
    })
  })
  .catch(error => {
    console.error('falid conection to database', error)
  })
