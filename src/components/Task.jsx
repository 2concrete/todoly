import { Circle, CircleCheck, Ellipsis, Trash, X } from "lucide-react";
import { useState } from "react";

const Task = ({
  name,
  description,
  completed,
  toggleCompleted,
  date,
  deleteTask,
}) => {
  const [circleHovered, setCircleHovered] = useState(false);
  const [optionsHovered, setOptionsHovered] = useState(false);
  return (
    <div className="flex justify-between relative">
      <div className="flex gap-2">
        <button
          className="self-start"
          onClick={() => toggleCompleted(date)}
          onMouseEnter={() => setCircleHovered(!circleHovered)}
          onMouseLeave={() => setCircleHovered(!circleHovered)}
        >
          {circleHovered ? (
            <CircleCheck
              className={`stroke-1 size-5 ${
                completed ? "text-green-500" : "text-neutral-600"
              }`}
            />
          ) : (
            <Circle
              className={`stroke-1 size-5 ${
                completed ? "text-green-500" : "text-neutral-600"
              }`}
            />
          )}
        </button>
        <div className="flex flex-col">
          <p className="text-sm">{name}</p>
          {description && (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </div>
      </div>
      <div>
        <button
          className="self-start"
          onClick={() => setOptionsHovered(!optionsHovered)}
        >
          <Ellipsis className="stroke-1 text-neutral-400" />
        </button>
        {optionsHovered && (
          <div
            className="absolute -right-25 top-0 border-neutral-400 bg-white border rounded"
            onMouseEnter={() => setOptionsHovered(true)}
            onMouseLeave={() => setOptionsHovered(false)}
          >
            <button
              className="flex items-center gap-2 p-2 cursor-pointer"
              onClick={() => deleteTask(date)}
            >
              <Trash className="text-red-400 size-5 stroke-1" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
