import { useState } from "react";

export function useCouter(initialValue) {
  const [contador, setContador] = useState(initialValue);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(initialValue);

  return { contador, incrementar, decrementar, resetear };
}
