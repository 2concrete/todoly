import { Calendar, Flag, Plus } from "lucide-react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(null);

  const [showPriorityPopout, setShowPriorityPopout] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addTask(name, description);
      setName("");
      setDescription("");
    }
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <input
              placeholder="Enter Task..."
              className="outline-none w-full"
              value={name}
              onChange={handleNameChange}
            />
            <textarea
              wrap="soft"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter Description..."
              className="outline-none text-xs resize-none w-full"
            />
          </div>
        </form>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-amber-100 w-fit h-fit p-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
          >
            <Plus />
            Add Task
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        <button className="border mr-1 text-sm border-neutral-400 w-fit h-fit p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all">
          <Calendar className="size-5 stroke-1" />
          Date
        </button>
        <button
          onClick={() => setShowPriorityPopout(!showPriorityPopout)}
          className="border text-sm border-neutral-400 w-fit h-fit p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
        >
          <Flag className="size-5 stroke-1" />
          Priority
        </button>
        {showPriorityPopout && (
          <div className="flex gap-1">
            <button className="border text-sm border-neutral-400 w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all">
              1
            </button>
            <button className="border text-sm border-neutral-400 w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all">
              2
            </button>
            <button className="border text-sm border-neutral-400 w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all">
              3
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskInput;
