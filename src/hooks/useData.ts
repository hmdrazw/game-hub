import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endPoint, {signal: controller.signal, ...requestConfig})
            .then(res => setData(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
            .finally(() => setLoading(false));
        return () => controller.abort()
    }, deps ? [...deps] : []);
    return {data, error, isLoading};
}
export default useData;