import { Link } from "react-router-dom";

const NotFound = () => {
    return (
    <section className="min-h-screen flex items-center justify-center px-4">
         <div className="text-center">
             <h1 className="text-7xl md:text-9xl font-bold text-yellow-400">
                404
             </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
            Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
            to="/"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-300 transition"
        >
            Back To Home
        </Link>
    </div>
    </section>
    );
};

export default NotFound;
