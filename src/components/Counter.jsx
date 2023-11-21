// import { useState } from "react";
import { useCouter } from "../hooks/useCounter";
export const Counter = () => {
  let initialValue = 0;
  const { contador, incrementar, decrementar, resetear } =
    useCouter(initialValue);

  const {
    contador: cont,
    incrementar: inc,
    decrementar: dec,
    resetear: res,
  } = useCouter(initialValue);

  //let initialValue = 0;
  //let contador = initialValue;
  //const [contador, setContador] = useState(initialValue);
  // const contador = miEstado[0];
  // const cambiarValor = miEstado[1];

  // const incrementar = () => setContador(contador + 1);
  // const decrementar = () => setContador(contador - 1);
  // const resetear = () => setContador(initialValue);

  // let initialValue2 = 0;
  // const [contador2, setContador2] = useState(initialValue);

  // const incrementar2 = () => setContador2(contador2 + 1);
  // const decrementar2 = () => setContador2(contador2 - 1);
  // const resetear2 = () => setContador2(initialValue2);
  return (
    <div>
      <p>Counter: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>

      <p>Counter2: {cont}</p>
      <button onClick={inc}>Incrementar</button>
      <button onClick={dec}>Decrementar</button>
      <button onClick={res}>Resetear</button>

      <p>Total: {contador + cont}</p>
    </div>
  );
};
