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
  const [newPriority, setNewPriority] = useState(null);

  const handleNameEdit = (e) => {
    setNewName(e.target.value);
  };

  const handleDescriptionEdit = (e) => {
    setNewDescription(e.target.value);
  };

  const handlePriorityEdit = (e) => {
    setNewPriority(e.target.value);
  };

  const today = () => {
    const newDate = new Date();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatDeadline = () => {
    const [day, month, year] = deadline.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const formatted = date.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
    });

    return formatted;
  };

  return (
    <div className="flex justify-between relative">
      <div className="flex gap-2">
        <button
          className="self-start"
          onClick={() => toggleCompleted(date)}
          onMouseEnter={() => setCircleHovered(true)}
          onMouseLeave={() => setCircleHovered(false)}
        >
          {circleHovered || completed ? (
            <CircleCheck
              className={`stroke-1 size-5 cursor-pointer ${
                completed ? "text-green-500" : "text-neutral-600"
              }`}
            />
          ) : (
            <Circle
              className={`stroke-1 size-5 cursor-pointer ${
                completed ? "text-green-500" : "text-neutral-600"
              }`}
            />
          )}
        </button>
        <div className="flex flex-col">
          <div className={`flex gap-2`}>
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
          </div>

          {editing ? (
            <input
              value={newDescription}
              onChange={handleDescriptionEdit}
              className="text-xs text-neutral-500 outline-none"
              placeholder={description ? description : "Add Description?"}
            />
          ) : (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </div>
      </div>
      <div className="flex gap-1 self-start items-center">
        {priority && (
          <div
            className={`
                flex items-center mr-1 gap-0.5 text-neutral-700 text-xs`}
          >
            <Flag size={13} />
            {editing ? (
              <input
                type="number"
                max={3}
                min={1}
                value={newPriority}
                onChange={handlePriorityEdit}
                placeholder={`${priority}`}
                className="w-9 outline-none"
              />
            ) : (
              priority
            )}
          </div>
        )}
        {editing && (
          <div className="flex gap-1">
            <button
              onClick={() => {
                editTask(
                  date,
                  newName ? newName : name,
                  newDescription ? newDescription : description,
                  newPriority ? newPriority : priority
                );
                setEditing(false);
              }}
              className="border text-xs w-fit h-fit p-1 cursor-pointer gap-1 rounded flex hover:opacity-70 transition-all border-green-500"
            >
              <Check size={15} />
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setNewName("");
                setNewDescription("");
                setNewPriority(null);
              }}
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
            } border text-xs w-fit h-fit p-1 text-nowrap mr-2 px-2 gap-1 rounded flex hover:opacity-70 transition-all`}
          >
            {deadline === today() ? "Today" : formatDeadline()}
          </div>
        )}
        <button className="" onClick={() => setOptionsHovered(!optionsHovered)}>
          <Ellipsis className="stroke-1 text-neutral-400" />
        </button>
        {optionsHovered && (
          <div
            className="absolute lg:-right-18 md:-right-18 right-7 top-0 border-neutral-400 bg-white border rounded"
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
