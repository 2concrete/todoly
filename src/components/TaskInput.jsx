import { Calendar, Flag, Plus } from "lucide-react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(null);
  const [date, setDate] = useState(null);

  const [showPriorityPopout, setShowPriorityPopout] = useState(false);
  const [showDatePopout, setShowDatePopout] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addTask(name, description, priority, date);
      setName("");
      setDescription("");
      setDate(null);
      setPriority(null);
      setShowDatePopout(false);
      setShowPriorityPopout(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <input
              placeholder="Enter Task..."
              className="outline-none"
              value={name}
              onChange={handleNameChange}
            />
            <textarea
              wrap="soft"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter Description..."
              className="outline-none text-xs resize-none"
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
        <div className="flex gap-1 mr-1">
          <button
            onClick={() => setShowDatePopout(!showDatePopout)}
            className="border text-sm border-neutral-400 w-fit h-fit p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
          >
            <Calendar className="size-5 stroke-1" />
            Date
          </button>
          {showDatePopout && (
            <div className="flex gap-1">
              <button
                onClick={() =>
                  date === today() ? setDate(null) : setDate(today())
                }
                className={`${
                  date === today()
                    ? "border-amber-400 bg-amber-100"
                    : "border-neutral-400"
                } border text-sm w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
              >
                Today
              </button>
              <input
                value={date}
                type="text"
                placeholder="dd-mm-yyyy"
                onChange={handleDateChange}
                className="border text-sm  w-24 outline-none h-fit p-1 px-2 gap-1 rounded flex hover:opacity-70 transition-all border-neutral-400"
              />
            </div>
          )}
        </div>
        <button
          onClick={() => setShowPriorityPopout(!showPriorityPopout)}
          className="border text-sm border-neutral-400 w-fit h-fit p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
        >
          <Flag className="size-5 stroke-1" />
          Priority
        </button>
        {showPriorityPopout && (
          <div className="flex gap-1">
            <button
              onClick={() =>
                priority === 1 ? setPriority(null) : setPriority(1)
              }
              className={`${
                priority === 1
                  ? "border-amber-400 bg-amber-100"
                  : "border-neutral-400"
              } border text-sm  w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
            >
              1
            </button>
            <button
              onClick={() =>
                priority === 2 ? setPriority(null) : setPriority(2)
              }
              className={`${
                priority === 2
                  ? "border-amber-400 bg-amber-100"
                  : "border-neutral-400"
              } border text-sm  w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
            >
              2
            </button>
            <button
              onClick={() =>
                priority === 3 ? setPriority(null) : setPriority(3)
              }
              className={`${
                priority === 3
                  ? "border-amber-400 bg-amber-100"
                  : "border-neutral-400"
              } border text-sm  w-fit h-fit p-1 px-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
            >
              3
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskInput;
