import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen bg-[#f8f6f1] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#8f7a57]">
            Error 404
          </p>
          <h2 className="mb-6 text-4xl font-semibold text-[#1a1b1a] sm:text-5xl md:text-6xl">
            Page not found
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            The page you are trying to visit does not exist, may have moved, or
            the link may be incorrect.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#1a1b1a] px-8 py-4 text-white transition-colors duration-300 hover:bg-black"
            >
              Back to Home
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-[#1a1b1a] px-8 py-4 text-[#1a1b1a] transition-colors duration-300 hover:bg-[#1a1b1a] hover:text-white"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
