import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export function EditDetails({ movieDetails ,updateMovieDetails}) {
  const { id } = useParams();
  const data = movieDetails[id];
  const [name, updateName] = useState("");
  const [url, updateUrl] = useState("");
  const [rating, updateRating] = useState("");
  const [summary, updateSummary] = useState("");
  const [year, updateYear] = useState("");

  console.log("Edit Page Details", id, movieDetails[id]);

  const textDetails={ textAlign:"center",color:"blue",fontSize:"1.5rem"}
  return (<div>
      <h3 style={textDetails}>UPDATE MOVIE DETAILS {id}</h3>
   
    <div>
      <div className="add-movie-container">
        <TextField
          id="filled-basic"
          label="Name"
          defaultValue={data.name}
          variant="filled"
         onChange={(e) => updateName(e.target.value)}
           />
        <TextField
          id="filled-basic"
          label="Movie Url"
          variant="filled"
          defaultValue={data.poster}
          onChange={(e) => updateUrl(e.target.value)} 
          />
        <TextField
          id="filled-basic"
          label="Rating"
          variant="filled"
          defaultValue={data.rating}
         onChange={(e) => updateRating(e.target.value)} 
          />
        <TextField
          id="filled-basic"
          label="Summary"
          variant="filled"
          defaultValue={data.summary}
          onChange={(e) => updateSummary(e.target.value)} 
          />
        <TextField
          id="filled-basic"
          label="Release Year"
          variant="filled"
          defaultValue={data.releaseYear}
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
          Save Changes
        </Button>
      </div>
    </div>
  </div>);
}
