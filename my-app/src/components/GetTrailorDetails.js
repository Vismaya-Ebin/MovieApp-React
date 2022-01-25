import { useParams } from "react-router-dom";
import "../App.css";
export default function GetTrailorDetails({ movie }) {
  const { id } = useParams();
  const movieDetails = movie[id];
  
  const styles ={ width:'100%'}
  
  return (
    <div className="trailor-container">
     
      <h2> Movie No: <span className="colorList">{id}</span></h2>
      <h2>Movie Name: <span className="colorList">{movieDetails.name}</span></h2>
      <h2>Movie Rating: <span className="colorList">{movieDetails.rating}⭐</span></h2>

     
      <p> <span className="colorList">{movieDetails.summary}</span></p>
      
      <div style={styles}>
      <iframe
        width="100%"
        height="600"
        src={movieDetails.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
