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
    <div className="flex items-start">
      <div>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default TaskInput;
