import Users from '../models/user.model';
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'

class UserService {
    async create(user: User) {
        const newUser = await Users.create(user).catch((error) => {
            console.log('Could not save user', error)
        })

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
}

export default UserService
