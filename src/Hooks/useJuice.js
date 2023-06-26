import { useEffect, useState } from "react";

const useJuice = () =>
{
    const [juice,setJuice]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("juice.json")
        .then(res => res.json())
        .then(data => {setJuice(data)
          setLoading(false)
        })
    },[])

    return [juice,loading]
}
export default useJuice;