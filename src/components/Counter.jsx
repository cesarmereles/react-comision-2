import { useState } from "react";
export const Counter = () => {
  let initialValue = 0;
  //let contador = initialValue;
  const [contador, setContador] = useState(initialValue);
  // const contador = miEstado[0];
  // const cambiarValor = miEstado[1];

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(initialValue);

  return (
    <div>
      <p>Counter:{contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};
