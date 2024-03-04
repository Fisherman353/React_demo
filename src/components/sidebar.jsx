import React from "react";

const Sidebar = ({ onGenreChange, currentGenre, genres }) => {
  return (
    <ul className="list-group">
      <li
        onClick={() => onGenreChange("All")}
        className={
          currentGenre === "All" ? "list-group-item active" : "list-group-item"
        }
      >
        All Genre
      </li>
      {genres.map((genre) => (
        <li
          onClick={() => onGenreChange(genre.name)}
          className={
            currentGenre === genre.name ? "list-group-item active" : "list-group-item"
          }
          key={genre._id}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
