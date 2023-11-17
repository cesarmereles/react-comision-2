import { Route, Routes } from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { Profiles } from "./pages/Profiles";
import { TasksPages } from "./pages/TasksPages";
import { TaskByIdPaga } from "./pages/TaskByIdPaga";

export const Router = () => {
  //   if (location.pathname === "/tareas") return <TasksPages />;
  //   if (location.pathname === "/perfil") return <Profiles />;
  //   return <HomePages />;
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/tareas" element={<TasksPages />} />
      <Route path="/tareas/:taskId" element={<TaskByIdPaga />} />
      <Route path="/perfil" element={<Profiles />} />
    </Routes>
  );
};

//  <div>
{
  /* <h1> Titulo </h1> */
}
{
  /* <img
        src="https://i0.wp.com/expectador.cl/wp-content/uploads/2023/04/afiche-robotech.jpeg?resize=1020%2C600&ssl=1"
        className="img-fluid rounded"
      /> */
}
{
  /* <Button
        texto="boton 1"
        variante="red"
        click={() => alert("Haciendo click")}
      /> */
}
{
  /* <Button texto="boton 2" variante="blue" oculto />
      <Button>MiBoton</Button>
      <Container>
        <p>Esto es un texto</p>
      </Container> */
}
{
  /* </div> */
}
