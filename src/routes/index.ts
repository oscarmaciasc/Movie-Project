import express from 'express'
import CategoryRouter from './category.route'
import MovieRouter from './movie.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
  router.use('/movies', MovieRouter)
}

export default routerApi
