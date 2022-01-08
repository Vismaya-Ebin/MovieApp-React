import Button from "@mui/material/Button";
import { useState } from "react";

import TextField from "@mui/material/TextField";

import "../App.css";

export default function ViewMovie({
  name,
  poster,
  rating,
  summary,
  releaseYear,
}) {
  const styles = { color: rating >= 8.5 ? "green" : "red" };
  const [clicked, updateClick] = useState(false);
  const toggleStyle = { display: clicked === true ? "none" : "visible" };
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt="" />
      <div className="movie-box">
        <p className="movie-name">{name}</p>

        <p className="movie-rating" style={styles}>
          {rating}⭐
        </p>
      </div>
      <Button
        className="movie-container"
        variant="outlined"
        onClick={(e) => {
          console.log(e.target.value);
          updateClick(!clicked);
        }}
      >
        Toggle Description
      </Button>
      <p className="movie-summary" style={toggleStyle}>
        {summary}{" "}
      </p>
      <div className="movie-box">
        <p className="movie-year">{releaseYear} </p>
        <Likes />
      </div>
    </div>
  );
}

export function ShowMovies() {
  const intialMovieDetails = [
    {
      name: "Venom",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg",
      rating: "8.5",
      summary:
        "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities",
      releaseYear: "2018",
    },
    {
      name: "Captain Marvel",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
      rating: "9.5",
      summary:
        "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent",
      releaseYear: 2019,
    },
    {
      name: "Doctor Strange",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
      rating: "8",
      summary:
        "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage",
      releaseYear: 2016,
    },
    {
      name: "Ant-Man",
      poster: "http://www.movienewsletters.net/photos/208057R1.jpg",
      rating: "7",
      summary:
        "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements",
      releaseYear: 2015,
    },
    {
      name: "Captain America: The First Avenger",
      poster: "https://m.media-amazon.com/images/I/61GV+Az3LzL._AC_SY741_.jpg",
      rating: "6",
      summary:
        "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation",
      releaseYear: 2011,
    },
  ];
  const [name, updateName] = useState("");
  const [url, updateUrl] = useState("");
  const [rating, updateRating] = useState("");
  const [summary, updateSummary] = useState("");
  const [year, updateYear] = useState("");
  const [movieDetails, updateMovieDetails] = useState(intialMovieDetails);

  return (
    <div>
      <div className="add-movie-container">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => updateName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Movie Url"
          variant="filled"
          onChange={(e) => updateUrl(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Rating"
          variant="filled"
          onChange={(e) => updateRating(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Summary"
          variant="filled"
          onChange={(e) => updateSummary(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Release Year"
          variant="filled"
          onChange={(e) => updateYear(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            const newMovie = {
              name: name,
              poster: url,
              rating: rating,
              summary: summary,
              releaseYear: year,
            };
            updateMovieDetails([...movieDetails, newMovie]);
          }}
        >
          Add Movie
        </Button>
      </div>
      <section className="movie-list">
        {movieDetails.map((movie) => (
          <ViewMovie
            name={movie.name}
            poster={movie.poster}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
            summary={movie.summary}
          />
        ))}
      </section>
    </div>
  );
}

export function Likes() {
  const [initialCount, updatedCount] = useState(0);
  const [disLike, updatedDisLike] = useState(0);
  const styles = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <Button
        variant="outlined"
        onClick={(e) => {
          updatedCount(initialCount + 1);
        }}
      >
        👍{initialCount}
      </Button>
      <Button
        variant="outlined"
        onClick={(e) => {
          updatedDisLike(disLike + 1);
        }}
      >
        👎{disLike}
      </Button>
    </div>
  );
}
