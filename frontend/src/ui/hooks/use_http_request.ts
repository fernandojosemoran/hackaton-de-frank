import { useEffect, useState } from "react";

interface IResponse {
    response: Promise<Response>,
    isLoading: boolean,
    isAbourt: boolean,
    statusCode: number
}

const defaultRequestConfig: RequestInit = {
    method: "GET",
};

function UseHttpRequest(requestUrl: string, options: object = defaultRequestConfig) {
    const [isLoading, setIsLoading] = useState(false);

    const makeRequest = async (): Promise<any> => {
        const response = await fetch(requestUrl, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonResponse = await response.json();

        return jsonResponse;
    }

    useEffect(() => {
        makeRequest();
    }, [])

    return {
        response: makeRequest,
        isLoading: isLoading,
        isAbourt: false,
        statusCode: 200,
    }
}

export default UseHttpRequest;