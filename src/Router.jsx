import { Route, Routes } from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { Profiles } from "./pages/Profiles";
import { TasksPages } from "./pages/TasksPages";
import { TaskByIdPaga } from "./pages/TaskByIdPaga";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/tareas" element={<TasksPages />} />
      <Route path="/tareas/:taskId" element={<TaskByIdPaga />} />
      <Route path="/perfil" element={<Profiles />} />
    </Routes>
  );
};
