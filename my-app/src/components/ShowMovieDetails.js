import { ViewMovie } from "./ViewMovie";

import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';


export function ShowMovieDetails({ movieDetails,updateMovieDetails }) {
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
            editBtn={<Button  startIcon={<EditIcon />}></Button>}
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
