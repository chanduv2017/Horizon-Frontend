import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";


const Header = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="border-b flex  justify-between px-10 py-2">
      <Link to="/blogs">
        <div className="flex justify-center flex-col font-serif text-4xl cursor-pointer">
          Horizon
        </div>
      </Link>
      <div className="flex flex-row justify-center">
        {username ? (
          <>
            <Link className="flex justify-normal" to={"/publish"}>
              <button
                type="button"
                className="mr-4 focus:outline-none text-white bg-slate-600 hover:bg-slate-800   rounded-3xl text-sm px-3 py-1.5 me-2 "
              >
                Create Blog
              </button>
            </Link>
            <Avatar size="big" name={username} />
          </>
        ) : (
          <div>
            <Link
            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            to="/signin"
          >
            Signin
          </Link>
          </div>
          
        )}
      </div>
    </div>
  );
};
export default Header;
