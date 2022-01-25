import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export function AddMovies({ movieDetails, updateMovieDetails }) {
  const [name, updateName] = useState("");
  const [url, updateUrl] = useState("");
  const [rating, updateRating] = useState("");
  const [summary, updateSummary] = useState("");
  const [year, updateYear] = useState("");

  return (
    <div>
      <div className="add-movie-container">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => updateName(e.target.value)} />
        <TextField
          id="filled-basic"
          label="Movie Url"
          variant="filled"
          onChange={(e) => updateUrl(e.target.value)} />
        <TextField
          id="filled-basic"
          label="Rating"
          variant="filled"
          onChange={(e) => updateRating(e.target.value)} />
        <TextField
          id="filled-basic"
          label="Summary"
          variant="filled"
          onChange={(e) => updateSummary(e.target.value)} />
        <TextField
          id="filled-basic"
          label="Release Year"
          variant="filled"
          onChange={(e) => updateYear(e.target.value)} />
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
    </div>
  );
}
