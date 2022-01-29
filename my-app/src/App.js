import "./App.css";

import Home from "./components/Home.js";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Notfound from "./components/Notfound.js";
import { useState } from "react";

import GetTrailorDetails from "./components/GetTrailorDetails.js";
import { AddMovies } from "./components/AddMovies.js";
import { ShowMovieDetails } from "./components/ShowMovieDetails.js";
import { EditDetails } from "./EditDetails";

function App() {
  // const intialMovieDetails = [
  //   {
  //     name: "Venom",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg",
  //     rating: "8.5",
  //     summary:
  //       "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities",
  //     releaseYear: "2018",
  //   },
  //   {
  //     name: "Captain Marvel",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
  //     rating: "9.5",
  //     summary:
  //       "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent",
  //     releaseYear: 2019,
  //   },
  //   {
  //     name: "Doctor Strange",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
  //     rating: "8",
  //     summary:
  //       "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage",
  //     releaseYear: 2016,
  //   },
  //   {
  //     name: "Ant-Man",
  //     poster: "http://www.movienewsletters.net/photos/208057R1.jpg",
  //     rating: "7",
  //     summary:
  //       "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements",
  //     releaseYear: 2015,
  //   },
  //   {
  //     name: "Captain America: The First Avenger",
  //     poster: "https://m.media-amazon.com/images/I/61GV+Az3LzL._AC_SY741_.jpg",
  //     rating: "6",
  //     summary:
  //       "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation",
  //     releaseYear: 2011,
  //   },
  // ];
  const intialMovieDetails =[
    {
      id:"1",
      name: "RRR",
      releaseYear:2020,
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {id:"2",
      name: "Iron man 2",
      releaseYear:2020,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    { id:"3",
      name: "No Country for Old Men",
      releaseYear:2019,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {id:"4",
      name: "Jai Bhim",
      releaseYear:2018,
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      id:"5",
      name: "The Avengers",
      rating: 8,
      releaseYear:2019,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      id:"6",
      name: "Interstellar",
      releaseYear:2020,
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id:"7",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      releaseYear:2020,
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      id:"8",
      name: "Ratatouille",
      releaseYear:2017,
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  
  const [movieDetails, updateMovieDetails] = useState(intialMovieDetails);

  const updateEditedMovieDetails =(editedData)=>{ 
     const editedDetails = movieDetails.map((data)=>{
       console.log("DATA", data);
       console.log("Edited Data",editedData);
       if(data.id === editedData.id){
         data.name = editedData.name;
         data.releaseYear = editedData.releaseYear;
         data.rating = editedData.rating;
         data.summary = editedData.summary;
         data.trailer = editedData.trailer;
       }
       return data;
     })
   
     updateMovieDetails(editedDetails);
  }
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movie </Link>
        </li>
        <li>
          <Link to="/show">Show Movie </Link>
        </li>
        <li>
          <Link to="/films"> </Link>
        </li>
      </ul>
      <hr/>

      <Switch>
        <Route path="/add/:id">
          <GetTrailorDetails movie={movieDetails} />
        </Route>
        <Route path="/movies/edit/:id"><EditDetails movieDetails={movieDetails} updateEditedMovieDetails={updateEditedMovieDetails}/></Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/movies/add">
          <AddMovies
            movieDetails={movieDetails}
            updateMovieDetails={updateMovieDetails}
          />
        </Route>

        <Route path="/show">
          <ShowMovieDetails movieDetails={movieDetails} updateMovieDetails={updateMovieDetails}/>
        </Route>

        <Route path="/films">
          <Redirect to="/add" />
        </Route>
        <Route path="/**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
