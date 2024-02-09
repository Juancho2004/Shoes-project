export const fetchData = async () => {
    try {
        const response = await fetch('http://195.35.37.45:5000/zapatillas')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data', error)
        throw new Error('Failed to fetch data') 
    }
}