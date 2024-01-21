import React from 'react';
import '../css/style.css';

const SearchResult = ({ results }) => {
  return (
    <div>
      <h2 className='searc-result'>Search Results</h2>
      <hr></hr>
      <ul>
        {results.map((result) => (
          <li key={result.imdbID}>
            <div>
              <img src={result.Poster} alt={`${result.Title} Poster`} />
            </div>
            <div>
              <p>Title: {result.Title}</p>
              <p>Year: {result.Year}</p>
              {result.Rated && <p>Rated: {result.Rated}</p>}
              {result.Released && <p>Released: {result.Released}</p>}
              {result.Runtime && <p>Runtime: {result.Runtime}</p>}
              {result.Genre && <p>Genre: {result.Genre}</p>}
              {result.Director && <p>Director: {result.Director}</p>}
              {result.Writer && <p>Writer: {result.Writer}</p>}
              {result.Actors && <p>Actors: {result.Actors}</p>}
              {result.Plot && <p>Plot: {result.Plot}</p>}
              {result.Language && <p>Language: {result.Language}</p>}
              {result.Country && <p>Country: {result.Country}</p>}
              {result.Awards && <p>Awards: {result.Awards}</p>}
              {result.imdbRating && <p>IMDb Rating: {result.imdbRating}</p>}
              <hr></hr>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
