import {
  ArrowDownAZ,
  ArrowDownZA,
  Ban,
  Calendar,
  Circle,
  CircleCheck,
  ClockArrowDown,
  ClockArrowUp,
  Flag,
  Plus,
} from "lucide-react";
import { useState } from "react";

const TaskInput = ({
  addTask,
  setSortMode,
  showCompleted,
  setShowCompleted,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(null);
  const [date, setDate] = useState("");

  const [showPriorityPopout, setShowPriorityPopout] = useState(false);
  const [showDatePopout, setShowDatePopout] = useState(false);
  const [showSortPopout, setShowSortPopout] = useState(false);

  const [sortIcon, setSortIcon] = useState(
    <ClockArrowUp className="stroke-1 size-4" />
  );

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
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}-${month}-${year}`;
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
      <div
        /* Title and Description Inputs*/ className="flex justify-between items-start"
      >
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
              placeholder="Enter Description... (optional)"
              className="outline-none text-xs resize-none mb-2"
            />
          </div>
        </form>
        <div className="flex gap-2 items-center">
          {/* Add Task Button*/}

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
      <div className="flex gap-1 justify-between">
        <div className="flex gap-1">
          <div className="flex gap-1" /* Date Button*/>
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
                    date === today() ? setDate("") : setDate(today())
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
                  className="border text-sm w-24 outline-none h-fit p-1 px-2 gap-1 rounded flex hover:opacity-70 transition-all border-neutral-400"
                />
              </div>
            )}
          </div>
          <div className="flex gap-1" /* Priority Button*/>
            <button
              onClick={() => setShowPriorityPopout(!showPriorityPopout)}
              className="border text-sm border-neutral-400 w-fit h-fit p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
            >
              <Flag className="size-5 stroke-1" />
              Priority
            </button>
            {showPriorityPopout && (
              <div className="flex gap-1">
                {/* Priority Button*/}

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
        </div>
        <div className="flex gap-1">
          <div /* Complete/Incomplete Button*/>
            <button
              onClick={() =>
                setShowCompleted(() => {
                  if (showCompleted === "all") return "completed";
                  if (showCompleted === "completed") return "incomplete";
                  if (showCompleted === "incomplete") return "all";
                })
              }
              className={` border text-sm border-neutral-400 w-fit pr-2 items-center justify-center p-1 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all`}
            >
              {showCompleted === "all" && (
                <Circle className="stroke-1 size-5" />
              )}
              {showCompleted === "all" && "All"}
              {showCompleted === "completed" && (
                <CircleCheck
                  className={`${
                    showCompleted === "completed" && "text-green-500"
                  } stroke-1 size-5`}
                />
              )}
              {showCompleted === "completed" && "Completed"}
              {showCompleted === "incomplete" && (
                <Ban className="stroke-1 size-5" />
              )}
              {showCompleted === "incomplete" && "Incomplete"}
            </button>
          </div>
          <div /* Sort Button*/ className="relative flex gap-1">
            <button
              onClick={() => setShowSortPopout(!showSortPopout)}
              className="border text-sm cursor-pointer mr-3 hover:opacity-70 transition-all border-neutral-400 justify-center items-center aspect-square rounded flex"
            >
              {sortIcon}
            </button>
            {showSortPopout && (
              <div
                onMouseEnter={() => setShowSortPopout(true)}
                onMouseLeave={() => setShowSortPopout(false)}
                className="absolute z-10 md:-right-14.5 lg:-right-14.5 right-8.5 top-0 overflow-hidden border-neutral-400 bg-white border rounded"
              >
                <button
                  className="flex items-center gap-1 p-1 transition-all border-b-1 border-neutral-400 hover:bg-neutral-50 text-xs text-nowrap cursor-pointer"
                  onClick={() => {
                    setShowSortPopout(!showSortPopout);
                    setSortIcon(<ClockArrowUp className="stroke-1 size-4" />);
                    setSortMode("new");
                  }}
                >
                  <ClockArrowUp className="text-neutral-800 size-4 stroke-1" />
                  New
                </button>
                <button
                  className="flex items-center gap-1 p-1 w-full transition-all border-b-1 border-neutral-400 hover:bg-neutral-50 text-xs  text-nowrap cursor-pointer"
                  onClick={() => {
                    setShowSortPopout(!showSortPopout);
                    setSortIcon(<ClockArrowDown className="stroke-1 size-4" />);
                    setSortMode("old");
                  }}
                >
                  <ClockArrowDown className="text-neutral-800 size-4 stroke-1" />
                  Old
                </button>
                <button
                  className="flex items-center gap-1 p-1 w-full transition-all hover:bg-neutral-50 text-xs border-b-1 border-neutral-400 text-nowrap cursor-pointer"
                  onClick={() => {
                    setShowSortPopout(!showSortPopout);
                    setSortIcon(<ArrowDownAZ className="stroke-1 size-4" />);
                    setSortMode("a-z");
                  }}
                >
                  <ArrowDownAZ className="text-neutral-800 size-4 stroke-1" />
                  A-Z
                </button>
                <button
                  className="flex items-center gap-1 p-1 w-full transition-all hover:bg-neutral-50 text-xs  text-nowrap cursor-pointer"
                  onClick={() => {
                    setShowSortPopout(!showSortPopout);
                    setSortIcon(<ArrowDownZA className="stroke-1 size-4" />);
                    setSortMode("z-a");
                  }}
                >
                  <ArrowDownZA className="text-neutral-800 size-4 stroke-1" />
                  Z-A
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
