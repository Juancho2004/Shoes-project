export const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/load-more-zapatillas/0')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data', error)
        throw new Error('Failed to fetch data') 
    }
}