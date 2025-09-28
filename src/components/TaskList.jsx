import Task from "./Task";

const TaskList = ({ tasks, toggleCompleted, deleteTask, editTask }) => {
  return (
    <div className="flex flex-col-reverse mt-6 gap-1">
      {tasks.map((task, index) => (
        <Task
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
          key={index}
          date={task.date}
          name={task.name}
          description={task.description}
          completed={task.completed}
          priority={task.priority}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
};

export default TaskList;
