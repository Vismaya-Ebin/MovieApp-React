import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export function EditDetails({ movieDetails, updateMovieDetails }) {
  const { id } = useParams();
  const [data, editData] = useState({ items: "" });
  const textDetails = {
    textAlign: "center",
    color: "blue",
    fontSize: "1.5rem",
  };

  const updateDetails = () => {
    fetch("https://61fe505ba58a4e00173c97d5.mockapi.io/movies/" + id, {
      method: "GET",
    }).then((response) => {
      response.json().then((mv) => editData({ items: mv.items }));
    });
  };

  useEffect(updateDetails, []);
  return (
    <div>
      <h3 style={textDetails}>UPDATE MOVIE DETAILS {id}</h3>

    {data.items?<EditMovieForm data={data} editData={editData} id={id} updateMovieDetails={updateMovieDetails}/>:null}
    </div>
  );
}

function EditMovieForm({data,editData,id}) {
  const [name, updateName] = useState(data.items.name);
  const [url, updateUrl] = useState(data.items.url);
  const [rating, updateRating] = useState(data.items.rating);
  const [summary, updateSummary] = useState(data.items.summary);
  const [year, updateYear] = useState(data.year);
  const history = useHistory();

  const updateApiCall=(data)=>{
    fetch("https://61fe505ba58a4e00173c97d5.mockapi.io/movies/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers:{
        "Content-type":"application/json"
      }
    }).then(() => {
      history.push("/show");
      // response.json().then((mv) => editData({ items: mv.items }));
    });
  }
  return (
    <div>
      <div>
        <div className="add-movie-container">
          <TextField
            id="filled-basic"
            label="Name"
            defaultValue={data.items.name}
            variant="filled"
            onChange={(e) => updateName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Movie Url"
            variant="filled"
            defaultValue={data.items.poster}
            onChange={(e) => updateUrl(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Rating"
            variant="filled"
            defaultValue={data.items.rating}
            onChange={(e) => updateRating(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Summary"
            variant="filled"
            defaultValue={data.items.summary}
            onChange={(e) => updateSummary(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Release Year"
            variant="filled"
            defaultValue={data.items.releaseYear}
            onChange={(e) => updateYear(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const newMovie = {
                id: data.id,
                name: name,
                poster: url,
                rating: rating,
                summary: summary,
                releaseYear: year,
              };
              updateApiCall(newMovie);
              // const copyOFMovieList = [...movieDetails];
              // copyOFMovieList[id] = newMovie;
              // console.log("1234", copyOFMovieList);
              // updateMovieDetails(copyOFMovieList);
              
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
