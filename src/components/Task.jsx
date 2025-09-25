import { Circle, CircleCheck, Ellipsis } from "lucide-react";
import { useState } from "react";

const Task = ({
  name,
  description,
  completed,
  toggleCompleted,
  date,
  deleteTask,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <button
          className="self-start"
          onClick={() => toggleCompleted(date)}
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(!hovered)}
        >
          {hovered ? (
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
      <button className="self-start" onClick={() => deleteTask(date)}>
        <Ellipsis className="stroke-1" />
      </button>
    </div>
  );
};

export default Task;
