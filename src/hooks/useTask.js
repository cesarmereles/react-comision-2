import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useTask() {
  const { taskId } = useParams();

  const [task, setTask] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
      });
  }, [taskId]);
  return { task };
}
