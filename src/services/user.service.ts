import Users from '../models/user.model';
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'

class UserService {
    async create(user: User) {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await Users.create({
            ...user,
            password: hashedPassword
        }).catch((error) => {
            console.log('Could not sabe user', error)
        })

        if (!newUser) {
            throw boom.badRequest('Could not create user')
        }

        return newUser
    }

    async findAll() {
        const users = await Users.find().catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!users) {
            throw boom.notFound('There are not users')
        }

        return users
    }

    async findById(id: string) {
        const user = await Users.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if (!user) {
            throw boom.notFound('User not found')
        }

        return user
    }

    async findByName(name: string) {
        const user = await Users.findOne({ name }).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!user) {
            throw boom.notFound('User not found')
        }

        return user
    }

    async findByEmail(email: String) {
        const user = await Users.findOne({ email }).catch((error) => {
            console.log('Could not retreive user info', error)
        })

        if (!user) {
            throw boom.notFound('User not found')
        }

        return user
    }
}

export default UserService
