import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function AddMovies() {
  const [name, updateName] = useState("");
  const [url, updateUrl] = useState("");
  const [rating, updateRating] = useState("");
  const [summary, updateSummary] = useState("");
  const [year, updateYear] = useState("");
  const [trailer, updateTrailer] = useState("");
  const history = useHistory();

  const addData = (data) => {
    fetch("https://61fe505ba58a4e00173c97d5.mockapi.io/movies/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.push("/show");
    });
  };

  return (
    <div>
      <div className="add-movie-container">
        <TextField
          id="filled-basic"
          label="Name"
          value={name}
          variant="filled"
          onChange={(e) => updateName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Movie Url"
          variant="filled"
          value={url}
          onChange={(e) => updateUrl(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Rating"
          variant="filled"
          value={rating}
          onChange={(e) => updateRating(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Summary"
          value={summary}
          variant="filled"
          onChange={(e) => updateSummary(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Release Year"
          variant="filled"
          value={year}
          onChange={(e) => updateYear(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Trailer"
          value={trailer}
          variant="filled"
          onChange={(e) => updateTrailer(e.target.value)}
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
              trailer: trailer,
            };
            // updateMovieDetails([...movieDetails, newMovie]);
            addData(newMovie);
          }}
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
