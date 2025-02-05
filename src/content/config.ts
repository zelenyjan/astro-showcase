import {defineCollection, z} from 'astro:content';

type Movie = {
    id: string;
    name: string;
    // title: string;
    original_name: string;
    csfd: string;
    description: string;
    rating: number;
    year: number;
    image: string;
}

const movies = defineCollection({
    loader: async () => {
        const response = await fetch('http://127.0.0.1:8000/api/movies/');
        const data = await response.json();
        // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
        return data.map((movie: Movie) => ({
            id: movie.id.toString(),
            // name: movie.title,
            name: movie.name,
            original_name: movie.original_name,
            csfd: movie.csfd,
            description: movie.description,
            rating: movie.rating,
            year: movie.year,
            image: movie.image,
        }));
    },
    // optionally define a schema using Zod
    schema: z.object({
        id: z.string(),
        name: z.string(),
        original_name: z.string(),
        csfd: z.string(),
        description: z.string(),
        rating: z.number(),
        year: z.number(),
        image: z.string(),
    }),
});

export const collections = {movies};