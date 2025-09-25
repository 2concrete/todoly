import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="w-full flex flex-col-reverse absolute mt-15">
      {tasks.map((task) => (
        <Task
          name={task.name}
          description={task.description}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
