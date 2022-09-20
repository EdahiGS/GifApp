import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifsApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    //!Validacion sencilla para evitar elementos duplicados.
    if (categories.includes(newCategory)) return;

    //!Spread para clonar el Array original y agregarle la nueva categoría.
    // setCategories([newCategory, ...categories]);

    //!Reemplazar la categoría anterior.
    setCategories([newCategory]);

  };

  return (
    <>
      <h1>GIF APP</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifsApp;
