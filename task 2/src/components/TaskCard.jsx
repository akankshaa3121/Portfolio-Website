function TaskCard({ title, category, status, onDelete }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-md">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="mb-1 text-gray-600">
        Category: {category}
      </p>

      <p className="mb-4 text-gray-600">
        Status: {status}
      </p>

      <button
        onClick={onDelete}
        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;