import { Schema, model } from 'mongoose'
import { User, UserModel } from '../types/user.type'

const Users = new Schema<User, UserModel>({
    name: {
        type: String,
        required: true,
        unique: false,
        index: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: false
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        index: true,
        trim: true
    }
})

export default model('User', Users)