import express from 'express'
import CategoryRouter from './category.route'
import MovieRouter from './movie.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
  router.use('/movies', MovieRouter)
  router.use('/users', UserRouter)
  router.use('/auth', AuthRouter)
}

export default routerApi
