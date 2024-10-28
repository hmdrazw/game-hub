import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('games', {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
    }
}, [selectedGenre?.id, selectedPlatform?.id]);
export default useGames;