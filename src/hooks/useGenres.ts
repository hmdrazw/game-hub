import genre from "../data/genre.ts";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => ({data: genre, isLoading: false, error: false});

export default useGenres;