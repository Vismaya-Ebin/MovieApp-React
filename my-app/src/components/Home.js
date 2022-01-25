


export  default function Home() {
    const style ={
        display: 'flex',
        fontFamily: 'Satisfy',
        fontWeight: 'bolder',
        alignItems: 'center',
        justifyContent: 'center',
        color:"yellow",
        fontSize:"8rem",
        textShadow: "12px 12px 15px blue",
       
        
    }
  

    const align ={
      textAlign:"center",
      fontSize:"10rem"
    }
  return (<div>
    <h2  style={style}>Welcome to Movie  App</h2>
    <p style={align} >😊</p>
  </div>);
}
