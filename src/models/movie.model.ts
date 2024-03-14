import { Schema, model } from 'mongoose'
import { Movie, MovieModel } from '../types/movie.type'

export const MOVIE_REFERENCE = 'Movie'

const Movies = new Schema<Movie, MovieModel>({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  releaseDate: {
    type: Date,
    required: true,
    unique: false,
    index: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    unique: false,
    index:true,
    trim:true
  },
  description: {
    type: String,
    required: false,
    trim: true
  }
})

export default model(MOVIE_REFERENCE, Movies)
