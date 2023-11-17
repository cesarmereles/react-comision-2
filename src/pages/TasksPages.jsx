import { TaskItem } from "../components/TaskItem";

const taskList = [
  {
    id: 1,
    title: "tarea 1",
    descripcion: "texto 1",
    done: true,
  },
  {
    id: 2,
    title: "tarea 2",
    descripcion: "texto 2",
    done: false,
  },
  {
    id: 3,
    title: "tarea 3",
    descripcion: "texto 3",
    done: false,
  },
];

export const TasksPages = () => {
  return (
    <div className="row">
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            descripcion={task.descripcion}
            done={task.done}
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
