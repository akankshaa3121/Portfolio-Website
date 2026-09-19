import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    console.log("Task:", task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;