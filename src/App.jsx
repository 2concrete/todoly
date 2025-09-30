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

  const [sortMode, setSortMode] = useState("none");

  const sortTasks = () => {
    if (sortMode === "none") {
      return tasks;
    } else if (sortMode === "a-z") {
      return [...tasks].sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
    } else if (sortMode === "z-a") {
      return [...tasks].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    }
  };

  const sampleTasks = () => {
    setTasks([
      {
        name: "Vacuum living room",
        date: 1759216653365,
        description: "Use special attachment",
        completed: false,
        priority: 2,
        deadline: "5-9-2025",
      },
      {
        name: "Walk the dog",
        date: 1759216681797,
        description: "Bring leash",
        completed: false,
        priority: 3,
        deadline: "30-8-2025",
      },
      {
        name: "Buy new decor",
        date: 1759216774930,
        description: "Posters and plants",
        completed: false,
        priority: null,
        deadline: "4-9-2025",
      },
      {
        name: "Fix invisible bug",
        date: 1759216800328,
        description: "in App.jsx",
        completed: false,
        priority: 3,
        deadline: "30-8-2025",
      },
      {
        name: "Update resume",
        date: 1759216880361,
        description: "New work experience",
        completed: false,
        priority: 2,
        deadline: "30-8-2025",
      },
      {
        name: "Book flights",
        date: 1759216928676,
        description: "New York",
        completed: false,
        priority: 1,
        deadline: "06-09-2025",
      },
    ]);
  };

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

  const editTask = (date, name, description) => {
    setTasks(
      tasks.map((task) =>
        task.date === date
          ? { ...task, name: name, description: description }
          : task
      )
    );
  };

  return (
    <div className="flex flex-col mt-10 mx-auto font-[Rubik] lg:w-1/2 md:w-3/4 sm:w-4/5 w-11/12">
      <TaskInput addTask={addTask} setSortMode={setSortMode} />
      <TaskList
        sortMode={sortMode}
        sortTasks={sortTasks}
        tasks={tasks}
        editTask={editTask}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
      <button
        className="absolute bottom-0 m-1 text-sm left-0 border-1 border-neutral-400 rounded transition-all px-1 hover:opacity-70 cursor-pointer"
        onClick={() => sampleTasks()}
      >
        dev
      </button>
    </div>
  );
};

export default App;
