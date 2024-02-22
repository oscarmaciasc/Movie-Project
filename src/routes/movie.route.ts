import express from 'express'
import { Movie } from '../types/movie.type'
import MovieService from '../services/movie.service'

const router = express.Router()
const service = new MovieService()

router.post('/', async(req, res) => {
    const movie: Movie = req.body
    const newMovie = await service.create(movie)

    res.status(201).json(newMovie)
})

router.get('/', async (req, res, next) => {
    try {
        const movies = await service.findAll()
        res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
})

router.get('/findMovieId/:id', async(req, res, next) => {
    try {
        const movie = await service.findById(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        next(error)
    }
})

router.get('/findMovieName', async(req, res, next) => {
    try {
        const movie = await service.findByName(req.query.name as string)
        res.status(200).json(movie)
    } catch(error) {
        next(error)
    }
})

router.get('/findMovieDirector', async(req, res, next) => {
    try {
        const movie = await service.findByDirector(req.query.director as string)
        res.status(200).json(movie)
    } catch(error) {
        next(error)
    }
})

export default router