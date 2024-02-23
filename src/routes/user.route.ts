import express from 'express'
import { User } from '../types/user.type'
import UserService from '../services/user.service'

const router = express.Router()
const service = new UserService()

router.post('/', async (req, res) => {
    const user: User = req.body
    const newUser = await service.create(user)

    res.status(201).json(newUser)
})

router.get('/', async (req, res, next) => {
    try {
        const users = await service.findAll()
        res.status(200).json(users)
    } catch(error) {
        next(error)
    }
})

router.get('/findUserId/:id', async(req, res, next) => {
    try{
        const user = await service.findById(req.params.id)
        res.status(200).json(user)
    } catch(error) {
        next(error)
    }
})

router.get('/findUserName', async(req, res, next) => {
    try {
        const user = await service.findByName(req.query.name as string)
        res.status(200).json(user)
    } catch(error) {
        next (error)
    }
})

export default router