import express from 'express'

const app = express()

const port = 3000

app.get('/', (_req, res) => {
  res.send({ message: 'hellow word' })
})

app.listen(port, () => {
  console.log('Server is running', port)
})
