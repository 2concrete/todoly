import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [editDescription, setEditDescription] = useState(false);

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
    <div className="flex items-start">
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Enter Task..."
            className="outline-none"
            value={name}
            onChange={handleNameChange}
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter Description..."
            className={`outline-none transition-all duration-200 bg-white z-10 ${
              editDescription ? "h-20 opacity-80" : "h-0 overflow-hidden"
            }`}
          />
        </form>
      </div>
      <button
        className="w-6 h-6 flex items-center justify-center"
        onClick={() => setEditDescription(!editDescription)}
      >
        {editDescription ? <ChevronUp /> : <ChevronDown />}
      </button>
    </div>
  );
};

export default TaskInput;
