
import { useState, useEffect } from 'react'

const cache = new Map()

const useFetch = url => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        if (cache.has(url)) {
            setData(cache.get(url))
            setLoading(false)
            setError(null)
            return
        }

        (async () => {
            setLoading(true)
            setError(null)
            setData(null)
            const response = await fetch(url)
            setLoading(false)

            if (!response.ok) {
                setError(`Error: ${response.status}`)
                return
            }

            const json = await response.json()
            cache.set(url, json)
            setData(json)
        })()
    }, [ url ])

    return { data, loading, error }
}

export default useFetch
