const LoadingModal = () => {
  return (
    <div className="relative z-20 bg-white dark:bg-[#05092e] px-6 py-8 rounded-lg shadow-xl text-center max-w-md mx-auto space-y-4">
      <div className="flex justify-center">
        <svg
          className="animate-spin h-8 w-8 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-100">
        Analyzing your event using AI...
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        We are reviewing your title and notes to categorize this event
        accurately. Please wait a moment.
      </p>
    </div>
  );
};

export default LoadingModal;
