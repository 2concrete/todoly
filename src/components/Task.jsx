import {
  Check,
  Circle,
  CircleCheck,
  Ellipsis,
  Flag,
  Pencil,
  Trash,
  X,
} from "lucide-react";
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
  editTask,
}) => {
  const [circleHovered, setCircleHovered] = useState(false);
  const [optionsHovered, setOptionsHovered] = useState(false);

  const [editing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleNameEdit = (e) => {
    setNewName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const today = () => {
    const newDate = new Date();
    const dateString =
      newDate.getDate() +
      "-" +
      newDate.getMonth() +
      "-" +
      newDate.getFullYear();
    return dateString;
  };
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
          <div className="flex gap-2">
            {editing ? (
              <input
                value={newName}
                onChange={handleNameEdit}
                className="text-sm flex gap-1 outline-none"
                placeholder={name}
              />
            ) : (
              <p className="text-sm flex gap-1">{name}</p>
            )}

            {priority && (
              <div className="flex items-center gap-0.5 text-neutral-700 text-xs">
                <Flag size={13} />
                {priority}
              </div>
            )}
          </div>

          {description && editing ? (
            <input
              value={newDescription}
              onChange={handleDescriptionChange}
              className="text-xs text-neutral-500 outline-none"
              placeholder={description}
            />
          ) : (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </div>
      </div>
      <div className="flex gap-1 items-start">
        {editing && (
          <div className="flex gap-1">
            <button
              onClick={() => {
                editTask(date, newName, newDescription);
                setEditing(false);
              }}
              className="border text-xs w-fit h-fit p-1 cursor-pointer gap-1 rounded fl2ex hover:opacity-70 transition-all border-green-500"
            >
              <Check size={15} />
            </button>
            <button
              onClick={() => setEditing(false)}
              className="border text-xs w-fit h-fit p-1 cursor-pointer gap-1 rounded flex hover:opacity-70 transition-all border-red-500"
            >
              <X size={15} />
            </button>
          </div>
        )}

        {deadline && (
          <div
            className={`${
              deadline === today() ? "border-green-500" : "border-neutral-400"
            } border text-xs w-fit h-fit p-1 px-2 gap-1 rounded flex hover:opacity-70 transition-all`}
          >
            {deadline === today() ? "Today" : deadline}
          </div>
        )}
        <button className="" onClick={() => setOptionsHovered(!optionsHovered)}>
          <Ellipsis className="stroke-1 text-neutral-400" />
        </button>
        {optionsHovered && (
          <div
            className="absolute -right-19 border-neutral-400 bg-white border rounded"
            onMouseEnter={() => setOptionsHovered(true)}
            onMouseLeave={() => setOptionsHovered(false)}
          >
            <button
              className="flex items-center gap-1 p-1 border-b-1 border-neutral-400 text-xs cursor-pointer"
              onClick={() => deleteTask(date)}
            >
              <Trash className="text-red-400 size-4 stroke-1" />
              Delete
            </button>
            <button
              className="flex items-center gap-1 p-1 text-xs cursor-pointer"
              onClick={() => {
                setEditing(true);
                setOptionsHovered(false);
              }}
            >
              <Pencil className="text-neutral-800 size-4 stroke-1" />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
