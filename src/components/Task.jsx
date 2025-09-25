const Task = ({ name, description, completed }) => {
  return (
    <div>
      <p>{name}</p>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Task;
