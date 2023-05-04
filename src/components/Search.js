import React from 'react'
import { useMovieContext } from '../context'

const Search = () => {
  const {query,setQuery,isError}=useMovieContext()
  return (
    <>
      
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
}

export default Search