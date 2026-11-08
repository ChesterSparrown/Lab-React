import { useState } from "react";

const Cards = ({ nombre, img, onLike }) => {

  const [likes, setlikes] = useState(0);

  const handleClick = () =>{
    console.log("like");
    setlikes(likes + 1);
    onLike();

  }


  return (
    <div style={{border: '1px solid  #ccc',
      padding: "20px",
      margin: "10px",
      borderRadius: "10px",
      alignItems: "center",
      textAlign: "center",

      }}>

      {/*Imagenes */}

      <img src={img} style={{

        width: "100%",
        height: "200px",
        objectFit: "cover"

      }}/>

      <h3>{nombre}</h3>
      <button
       style={{
        width: "100px",
        padding: '6px',
        margin: '10px',
        backgroundColor: ' rgb(87, 222, 116)',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '16px', 
        fontWeight: 'bold',
        cursor: 'pointer',
      }}

      onClick={handleClick}
      > me gusta {likes}
      </button>
      {
        likes>= 5 && (
          <p style={{
            color: "green"
          }}>
            !Es muy popular
          </p>
        )
      }
    </div>
  );
};

export default Cards;
