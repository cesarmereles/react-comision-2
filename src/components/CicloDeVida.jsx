import { useEffect, useState } from "react";
export const CicloDeVida = () => {
  //*Se ejecuta cuando se crea el componente
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    //console.log("Se ejecuta cada vez que cambia el estado");
    return () => {
      console.log("Se ejecuta cuando se destruye el componente");
    };
  }, [Counter]);

  return (
    <div>
      CicloDeVida
      <button
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        {Counter}
      </button>
    </div>
  );
};
