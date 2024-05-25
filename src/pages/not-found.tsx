import { Link } from "react-router-dom";
import CHIRIK from "../assets/chirik.webp";
import { Img } from "react-image";

export const NotFound = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen text-[#000113]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-lg">Page not found</p>
        <Link
          to="/"
          className="text-[#FFD700]"
          style={{
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "1px",
          }}
        >
          Go back to home
        </Link>
      </div>
      <Img src={CHIRIK} alt="404" className="w-1/4" />
    </div>
  );
};
