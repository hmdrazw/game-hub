import useData from "./useData.ts";
import {GameQuery} from "../App.tsx";

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
    rating_top: number;
    rating: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>('games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    }
}, [gameQuery]);
export default useGames;