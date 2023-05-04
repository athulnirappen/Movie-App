import { createContext, useContext, useEffect, useState } from "react";


 export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


 export const MovieContext = createContext();


export const MovieContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query,setQuery]=useState('titanic')

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
                    msg:data.Error
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      let timeOut= setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`); 
        }, 800)

        return ()=>clearTimeout(timeOut)
       
    },[query])
    return (
      <MovieContext.Provider
        value={{ isLoading, isError, movie, query, setQuery }}
      >
        {children}
      </MovieContext.Provider>
    );
 } 


export const useMovieContext = () => {
    return useContext(MovieContext)
}