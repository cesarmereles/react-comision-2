import { TaskItem } from "../components/TaskItem";
import { useEffect, useState } from "react";

// const taskList = [
//   {
//     id: 1,
//     title: "tarea 1",
//     descripcion: "texto 1",
//     done: true,
//   },
//   {
//     id: 2,
//     title: "tarea 2",
//     descripcion: "texto 2",
//     done: false,
//   },
//   {
//     id: 3,
//     title: "tarea 3",
//     descripcion: "texto 3",
//     done: false,
//   },
// ];

export const TasksPages = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
      });
  }, []);
  return (
    <div className="row">
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            descripcion={"lorem ipsun"}
            done={task.completed}
          />
        );
      })}
      <TaskItem
        title="titulo personalizado"
        descripcion="descripcion personalizado"
        done="true"
      />
    </div>
  );
};
