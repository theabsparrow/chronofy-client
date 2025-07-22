import { TbCalendarExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9fafb] px-4 text-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-4">
          <TbCalendarExclamation className="text-green-600 text-6xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Not Found
        </h1>
        <p className="text-gray-600 text-base mb-6">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Please check the URL or go back to the homepage.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-700 text-white px-6 py-2 rounded-md text-sm hover:bg-green-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
