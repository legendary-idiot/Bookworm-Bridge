import errorAnimation from "../assets/animations/404-Animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="w-screen overflow-hidden relative bg-[#fdf9e2]">
      <Lottie
        animationData={errorAnimation}
        loop={true}
        className="w-full h-screen object-cover"
      />

      <div className="absolute top-10 right-4 z-10">
        <Link
          to="/"
          className="text-amber-700 text-lg sm:text-2xl font-light underline hover:text-orange-600 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
