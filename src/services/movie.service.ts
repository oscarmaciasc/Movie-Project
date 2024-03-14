import Movies from '../models/movie.model'
import { Movie, MovieModel } from '../types/movie.type'
import boom from '@hapi/boom'

class MovieService {
  async create(movie: Movie) {
    const newMovie = await Movies.create(movie).catch((error) => {
      console.log('Could not save movie', error)
    })

    return newMovie
  }

  async findAll() {
    const movies = await Movies.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movies) {
      throw boom.notFound('There are not movies')
    }

    return movies
  }

  async findById(id: string) {
    const movie = await Movies.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Movie not found')
    }

    return movie
  }

  async findByName(name: string) {
    const movie = await Movies.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Movie not found')
    }

    return movie
  }

  async findByDirector(director: string) {
    const movie = await Movies.find({ director }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!movie) {
      throw boom.notFound('Movie not found')
    }

    return movie
  }

  async findByFilter(filter: Partial<Movie>) {
    try {
      const movies = await Movies.find(filter);
      if (!movies.length) {
        throw boom.notFound('No movies found with the given filter');
      }
      return movies;
    } catch (error) {
      console.error('Error while connecting to the DB', error);
      throw boom.badImplementation('Error while connecting to the DB');
    }
  }
}

export default MovieService
