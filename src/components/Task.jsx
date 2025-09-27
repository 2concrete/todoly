import { Circle, CircleCheck, Ellipsis, Flag, Trash, X } from "lucide-react";
import { useState } from "react";

const Task = ({
  name,
  description,
  completed,
  toggleCompleted,
  date,
  deleteTask,
  priority,
  deadline,
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
          <p className="text-sm flex gap-1">
            {name}
            {priority && (
              <div className="flex items-center gap-0.5 text-neutral-700 text-xs">
                <Flag size={13} />
                {priority}
              </div>
            )}
          </p>
          {description && (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {deadline && (
          <div
            className={`${
              deadline === new Date().getDate()
                ? "border-green-500"
                : "border-neutral-400"
            } border text-sm w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
          >
            {deadline === new Date().getDate()
              ? "Today"
              : new Date().getDate() + "/" + new Date().getMonth()}
          </div>
        )}
        <button className="" onClick={() => setOptionsHovered(!optionsHovered)}>
          <Ellipsis className="stroke-1 text-neutral-400" />
        </button>
        {optionsHovered && (
          <div
            className="absolute -right-18 border-neutral-400 bg-white border rounded"
            onMouseEnter={() => setOptionsHovered(true)}
            onMouseLeave={() => setOptionsHovered(false)}
          >
            <button
              className="flex items-center gap-1 p-1 text-xs cursor-pointer"
              onClick={() => deleteTask(date)}
            >
              <Trash className="text-red-400 size-4 stroke-1" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
