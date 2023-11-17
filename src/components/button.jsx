//
//import React from "react";

//rafc
export const Button = ({
  children,
  texto = "default",
  variante = "green",
  click,
  oculto,
}) => {
  //*RENDERIZADO CONDICIONAL
  // if (oculto) return <button>oculto</button>;
  if (oculto) return null;
  let clase = "";
  //TODO APLICANDO ESTILOS CON BOOSTRAP
  if (variante === "green") clase = "btn-primary";
  if (variante === "red") clase = "btn-success";
  if (variante === "blue") clase = "btn-danger";

  //TODO CONSTRUYENDO COMPONENTES DESDE CERO Y APLICANDO ESTILOS CON CSS
  // if (variante === "green") clase = "btn-green";
  // if (variante === "red") clase = "btn-red";
  // if (variante === "blue") clase = "btn-blue";

  return (
    <button onClick={click} className={"btn " + clase}>
      {children || texto}
    </button>
  );
};
