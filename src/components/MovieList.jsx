import { useState, useEffect } from 'react'
import StarRating from './StarRating'


const movieListStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "grid",
  gap: "0.5rem"
}


const MovieList = () => {
   
    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)
   
    useEffect(() => {
        (async () => {
            try {
                const url = '/data/Movies.json'
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error('Could not fetch the data.')
                }
                const data = await response.json()
                setMovies(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        })()


    }, [])

    useEffect(() => {
        if (!isLoading && !error) {
            document.title = `${movies.length} Favorite Movies`
        }
    }, [movies, isLoading, error])
   

    if (isLoading) return <div>Loading Movies</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div >
          <h2>Favorite Movies</h2>
          <ul style={movieListStyle}>
            {movies.map(({ id, title, rating }) => (
              <li key={id}>{title}<br/><StarRating initialRating={rating}/></li>
            ))}
          </ul>
        </div>
   )
}

export default MovieList