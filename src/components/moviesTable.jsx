import React from "react";
import Like from "../common/like";
import Table from "../common/table";
import { Link } from "react-router-dom";

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {
  let columns = [
    { path: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie.title)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table columns={columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
  );
};

export default MoviesTable;
