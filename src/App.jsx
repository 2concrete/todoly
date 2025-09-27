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

  const addTask = (name, description, priority, deadline) => {
    const newTask = {
      name: name,
      date: Date.now(),
      description: description,
      completed: false,
      priority: priority,
      deadline: deadline,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompleted = (date) => {
    setTasks(
      tasks.map((task) =>
        task.date === date ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (date) => {
    setTasks(tasks.filter((task) => task.date !== date));
  };

  return (
    <div className="flex flex-col mt-10 w-1/2 mx-auto font-[Rubik]">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
