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
}

const useGames = (gameQuery: GameQuery) => useData<Game>('games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id
    }
}, [gameQuery.genre?.id, gameQuery.platform?.id]);
export default useGames;