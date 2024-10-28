import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => setGenres(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
            .finally(() => setLoading(false));
        return () => controller.abort()
    }, []);
    return {genres, error, isLoading};
}
export default useGenres;