function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">

        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
          User Profile
        </h2>

        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              A
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Alisha
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                React Developer
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Name
              </p>

              <p className="font-medium text-gray-800 dark:text-white">
                Alisha
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Role
              </p>

              <p className="font-medium text-gray-800 dark:text-white">
                React Developer
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Account Status
              </p>

              <p className="font-medium text-green-600">
                Active
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;