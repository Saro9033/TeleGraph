 import { useEffect, useState } from 'react'
 
 const useWidth = () => {
    const [windowSize, setWindowSize] = useState({width:undefined})

    useEffect(() =>{
       const handleResize = () => {
        setWindowSize( {width:window.innerWidth} )
        };

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])
   return windowSize;
 }
 
 export default useWidth