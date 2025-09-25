import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = {
      name: name,
      description: description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="flex flex-col mt-10 w-fit mx-auto">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
