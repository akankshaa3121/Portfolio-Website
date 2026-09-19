function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
    />
  );
}

export default SearchBar;