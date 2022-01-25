import { ViewMovie } from "./ViewMovie";

import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";


export function ShowMovieDetails({ movieDetails,updateMovieDetails }) {
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
            editBtn={<Button  onClick={()=>{
              history.push("movies/edit/"+index)
            }} startIcon={<EditIcon />}></Button>}
            deleBtn={
              <Button onClick={()=>{
                const remainingMovies = movieDetails.filter((data,idx)=>{
                  return idx!== index;
                })
                console.log(remainingMovies);
                updateMovieDetails(remainingMovies)
              }} startIcon={<DeleteIcon />}></Button>
            }
          />
          
        ))}

        
      </section>
    </div>
  );
}
