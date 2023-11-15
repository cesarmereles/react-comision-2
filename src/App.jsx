import { Button } from "./components/button";
import { Nav } from "./components/nav";

//TODO COMPONENTE RAIZ
export const App = () => {
  return (
    <div>
      <Nav />
      <h1> Titulo </h1>
      <Button texto="boton 1" />
      <Button texto="boton 2" />
      <Button />
      {/* {Button("boton 1")}
      {Button("boton 2")} */}
    </div>
  );
};

//export default App;
