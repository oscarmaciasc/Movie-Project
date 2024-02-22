import { Model } from "mongoose";

export type Movie = {
    id?: string, 
    name?: string,
    releaseDate?: Date,
    director?: string,
    description?: string
}

export type MovieModel = Model<Movie>