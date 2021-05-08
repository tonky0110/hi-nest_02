import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one movie with the movieId: ${movieId}.`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string, @Body() updateData) {
        return {
            updateMovieId: movieId,
            ...updateData
        }
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with the movieId: ${movieId}.`
    }

}
