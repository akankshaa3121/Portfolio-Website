import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="min-h-screen w-full bg-gray-900 p-6 text-white md:min-h-screen md:w-64">
      <h1 className="mb-8 text-2xl font-bold">
        Task Manager
      </h1>

      <nav className="space-y-3">
        <Link
          to="/"
          className="block rounded-lg p-3 hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/tasks"
          className="block rounded-lg p-3 hover:bg-gray-700"
        >
          Tasks
        </Link>

        <Link
          to="/profile"
          className="block rounded-lg p-3 hover:bg-gray-700"
        >
          Profile
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;