import { createContext, useContext, useEffect, useState } from "react";


const API_URL = `http://www.omdbapi.com/?apikey=468fb48d&s=titanic`;


 export const MovieContext = createContext();


export const MovieContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""})

    const getMovies =async (url) => {
        try {

            const res = await fetch(url);
            const data =await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data.Search)
            } else {
                setIsError({
                    show: true,
                    msg:"data.error"
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies(API_URL)
    },[])
    return <MovieContext.Provider value={{ isLoading, isError, movie }}>
         {children}
     </MovieContext.Provider>
 } 


export const useMovieContext = () => {
    return useContext(MovieContext)
}