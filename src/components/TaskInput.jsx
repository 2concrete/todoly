import { Plus } from "lucide-react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
    <div className="flex justify-between">
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
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-amber-200 w-fit h-fit p-2 gap-1 rounded flex cursor-pointer hover:opacity-70 transition-all"
      >
        <Plus />
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
