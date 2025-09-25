import Task from "./Task";

const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <div className="flex flex-col-reverse">
      {tasks.map((task, index) => (
        <Task
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
          key={index}
          date={task.date}
          name={task.name}
          description={task.description}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
