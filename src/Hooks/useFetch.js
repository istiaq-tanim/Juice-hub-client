import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [fetchData, setFetchData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setFetchData(data))
    },[url])
    return fetchData     
}
export default useFetch