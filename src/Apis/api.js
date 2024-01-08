import { useEffect, useState } from "react";

// const url = http://127.0.0.1:5000/zapatillas

 export const BuscadorApi = (url) => {
    const [inputValue, setInputValue] = useState('');
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleInputvalue = (value) => {
        setInputValue(value)
    };


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}?q=${inputValue}`);
                const data = await response.json();
                setResultados(data)
                setLoading(false)
            } catch (error) {
                setError('Error al obtener los datos');
                setLoading(false)
            }
        };

        if (inputValue) {
            fetchData()
        } else {
            setResultados([])
        }
    }, [inputValue, url])

    return {
        inputValue,
        handleInputvalue,
        resultados,
        loading,
        error,
    }
}