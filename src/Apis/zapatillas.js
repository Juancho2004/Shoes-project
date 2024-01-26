import { useState, useEffect } from 'react';

export function useDescription (url){
    const [dataZ, setDataZ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
        
    useEffect(()=> {
        setTimeout(()=> {
            setLoading(true)
            fetch(url)
            .then((response)=> response.json())
            .then((data)=> setDataZ(data))
            .catch((error) => 
            setError(error))
            .finally(()=> setLoading(false))
        },2000)
    }, [])

    return {dataZ}
}




