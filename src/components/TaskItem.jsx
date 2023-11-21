import { useState } from "react";

export const TaskItem = ({ title, descripcion, done }) => {
  const [isCompleted, setCompleted] = useState(done);
  return (
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descripcion}</p>
          <button
            onClick={() => {
              setCompleted(!isCompleted);
            }}
            className={`btn ${isCompleted ? "btn-success" : "btn-danger"}`}
          >
            {isCompleted ? "Completado" : "Incompleto"})
          </button>
        </div>
      </div>
    </div>
  );
};
