import { ViewMovie } from "./ViewMovie";

import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export function ShowMovieDetails() {
  const [movieDetails, updateMovieDetails] = useState([]);
  const getMovies = () => {
    fetch("https://61b4d14c0e84b70017331992.mockapi.io/users/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((movieDetails) => {
        console.log("111111Movie Details", movieDetails);
        updateMovieDetails(movieDetails);
      });
  };
  // similar to ComponentDidMount
  useEffect(getMovies, []);

  const removeItem = (id) => {
    fetch("https://61b4d14c0e84b70017331992.mockapi.io/users/movies"+id,{
      method: "DELETE",})
      .then((data) => data.json())
      .then(()=> getMovies());
  };

  const history = useHistory();
  return (
    <div>
      <section className="movie-list">
        {movieDetails.map((movie, index) => (
          <ViewMovie
            key={index}
            name={movie.name}
            poster={movie.poster}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
            summary={movie.summary}
            index={index}
            editBtn={
              <Button
                color="warning"
                onClick={() => {
                  history.push("movies/edit/" + index);
                }}
                startIcon={<EditIcon />}
              ></Button>
            }
            deleBtn={
              <Button
                color="error"
                onClick={() => {
                  removeItem(movie.id);
                  alert(movie.id);
                  // const remainingMovies = movieDetails.filter((data, idx) => {
                  //   return idx !== index;
                  // });
                  // console.log(remainingMovies);
                  // updateMovieDetails(remainingMovies);
                }}
                startIcon={<DeleteIcon />}
              ></Button>
            }
          />
        ))}
      </section>
    </div>
  );
}
