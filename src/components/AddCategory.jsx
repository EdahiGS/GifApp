import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    //!Tomar los inputs que digite el usuario
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //!Prevenir el comportamiento del boton
    event.preventDefault();
    //!Prevenir que se inserten valores de un solo caracter
    if (inputValue.trim().length <= 1) {
      return
    }
    
    onNewCategory(inputValue.trim());
    setInputValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar una categoría.."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
