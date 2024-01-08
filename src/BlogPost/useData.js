import { useState, useEffect } from 'react';

export function useDescription (url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    
    useEffect(()=> {
        setTimeout(()=> {
            setLoading(true)
            fetch(url)
            .then((response)=> response.json())
            .then((data)=> setData(data))
            .catch((error) => 
            setError(error))
            .finally(()=> setLoading(false))
        },2000)
    }, [])

    return {data, loading, error}
}




