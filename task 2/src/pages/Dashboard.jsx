import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  // Save tasks whenever tasks change
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Fetch tasks from public API
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    // Only fetch API tasks if no tasks are saved
    if (savedTasks) {
      return;
    }

    const fetchTasks = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          "https://dummyjson.com/todos"
        );

        const apiTasks = response.data.todos.map(
          (item) => ({
            id: item.id,
            title: item.todo,
            category: "General",
            status: item.completed
              ? "Completed"
              : "Pending",
          })
        );

        setTasks(apiTasks);
      } catch (error) {
        console.error(error);
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add task
  const addTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task.trim(),
      category:
        category === "All"
          ? "General"
          : category,
      status: "Pending",
    };

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ]);

    setTask("");
  };

  // Delete task
  const deleteTask = (idToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter(
        (item) => item.id !== idToDelete
      )
    );
  };

  // Search and category filter
  const filteredTasks = tasks.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900 md:flex-row">

      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-4 md:p-6">

          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h2>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {/* Category Filter */}
          <div className="my-4">
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white md:w-auto"
            >
              <option value="All">
                All Categories
              </option>

              <option value="Development">
                Development
              </option>

              <option value="Learning">
                Learning
              </option>

              <option value="General">
                General
              </option>
            </select>
          </div>

          {/* Add Task */}
          <form
            onSubmit={addTask}
            className="my-6 flex flex-col gap-3 md:flex-row"
          >
            <input
              type="text"
              placeholder="Enter a new task"
              value={task}
              onChange={(e) =>
                setTask(e.target.value)
              }
              className="flex-1 rounded-lg border border-gray-300 bg-white p-3 text-gray-800 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Add Task
            </button>
          </form>

          {/* Loading */}
          {loading && (
            <div className="mb-4 rounded-lg bg-blue-100 p-4 text-blue-700">
              Loading tasks...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
              <p>{error}</p>

              <button
                onClick={() =>
                  window.location.reload()
                }
                className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Retry
              </button>
            </div>
          )}

          {/* Tasks */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTasks.map((item) => (
              <TaskCard
                key={item.id}
                title={item.title}
                category={item.category}
                status={item.status}
                onDelete={() =>
                  deleteTask(item.id)
                }
              />
            ))}
          </div>

          {/* Empty State */}
          {!loading &&
            filteredTasks.length === 0 &&
            !error && (
              <p className="mt-6 text-gray-500 dark:text-gray-400">
                No tasks found.
              </p>
            )}

        </main>
      </div>
    </div>
  );
}

export default Dashboard;