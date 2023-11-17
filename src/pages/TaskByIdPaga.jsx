import { useParams } from "react-router-dom";

//rafc
export const TaskByIdPaga = () => {
  const { taskId } = useParams();
  return <div>El id es: {taskId}</div>;
};
