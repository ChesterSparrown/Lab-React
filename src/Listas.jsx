import { useState } from "react";
import Cards from "./Cards";

const Listas = () => {
  const frutas = [
    { id: 1, nombre: "SwordArtOnline", imagen: 'kirito.png'},
    { id: 2, nombre: "NarutoShippuden", imagen: 'naruto.png'},
    { id: 3, nombre: "LosCaballerosD", imagen: 'shaga.png'},
  ];
   
  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState("");
    console.log(busqueda);

  const frutasFiltradas =
   frutas.filter((fruta) => 
    fruta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      
      <h1>Total de vistas de Anime: {total}</h1>

      <input style={{
        padding: "10px",
        marginBottom: "20px",
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "5px"

      }} type="text" 
         placeholder="Ingrese nombre del Anime"
         value={busqueda}
         onChange={(e)=>{
          
          setBusqueda(e.target.value);
         }}
      />

      <div style={{ display: "flex", gap: '10px'}}>

        {frutasFiltradas.length=== 0 && (
          <p style={{color: "#ccc", fontSize: "20px" }}>
            No se ha encontrado lo que esta buscando "{busqueda}"
          </p>

        )}

       s 
      {frutasFiltradas.map((fruta)  => {
        return <Cards key={fruta.id}
         nombre={fruta.nombre}
         img={fruta.imagen}
         onLike={()=>{
          console.log('like en le padre');
          setTotal(total + 1);
        }}
          />

      } ) }
      s
      </div>
    </div>
  );
};

export default Listas;
