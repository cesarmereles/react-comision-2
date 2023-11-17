import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
//import "./styles.css";

//*ReactDOM= significa react para el dom

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

//const App = () => <h1>Hello</h1>;
/* 
  const app = () => <h1>Hello</h1>;
      *ESTO EQUIVALE A ESTO EN EL DOM
  document.createElement('h1').innerHTML = "hello"
  TODO -> CUANDO UNA FUNCION DEVUELVE COMO JSX SE LO CONOCE COMO COMPONENTE
  TODO -> UN COMPONENTE DEBE TENER LA PRIMER LETRA EN MAYUSCULA
  TODO -> JSX ES LA CREACION DE ELEMENTOS HTML
  TODO -> SPA S=SINGLE P=PAGE A=APPLICATION

*/

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); //*ES XML EN JAVASCRIPT
