import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  //!Haciendo uso de un custom Hook
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {/* //!Elemento que se muestra mientras carga los GIFS */}
      {isLoading ? <h2>Cargando...</h2> : null}


      <div className="card-grid">
        {/* //!Desestructurando images */}
        {images.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

