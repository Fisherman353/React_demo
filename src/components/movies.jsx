import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import Sidebar from "./sidebar";
import MoviesTable from "./moviesTable";
import _ from "lodash";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [genres, setGenres] = useState(getGenres());
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const onDelete = (name) => {
    setMovies(
      movies.filter((movie) => {
        if (movie.title !== name) {
          return true;
        }
      })
    );
  };

  const handleLike = (movie) => {
    let updatedLike = movies.map((m) => {
      if (m._id === movie._id) {
        // Change movie.id to movie._id
        return { ...m, liked: !m.liked };
      }
      return m;
    });
    setMovies(updatedLike);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreChange = (genre) => {
    if (genre === "All") {
      setCurrentGenre(genre);
      setCurrentPage(1);
      return setMovies(getMovies);
    }
    setMovies(
      getMovies().filter((movie) => {
        console.log(movie.genre.name + genre);
        return movie.genre.name === genre;
      })
    );
    setCurrentPage(1);
    setCurrentGenre(genre);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const filtered =
    currentGenre === "All"
      ? getMovies()
      : getMovies().filter((movie) => {
          return movie.genre.name === currentGenre;
        });

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const paginated_movies = paginate(sorted, currentPage, pageSize);

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Sidebar
            onGenreChange={handleGenreChange}
            currentGenre={currentGenre}
            genres={genres}
          />
        </div>
        <div className="col">
          {movies.length !== 0 ? (
            <>
              <div>Showing {movies.length} movies in Database</div>
              <MoviesTable
                movies={paginated_movies}
                onLike={handleLike}
                sortColumn={sortColumn}
                onDelete={onDelete}
                onSort={handleSort}
              />
              <Pagination
                currentPage={currentPage}
                itemsCount={movies.length}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div>No Movies !</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
