//import { useParams } from "react-router-dom";
//import { useState, useEffect } from "react";
import { TaskItem } from "../components/TaskItem";
import { useTask } from "../hooks/useTask";

//rafc
export const TaskByIdPaga = () => {
  // const { taskId } = useParams();

  // const [task, setTask] = useState({});
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTask(data);
  //     });
  // }, [taskId]);
  const { task } = useTask();
  return (
    <div>
      {task.title ? (
        <TaskItem
          title={task.title}
          descripcion={"Muy bueno"}
          done={task.completed}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
