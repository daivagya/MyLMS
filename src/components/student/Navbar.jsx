import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <nav
      className={`border-b shadow-sm border-gray-200 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/40"
      } `}
    >
      <div className="container px-5 md:px-10 mx-auto flex justify-between items-center py-4">
        {/* <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-28 lg:w-32 cursor-pointer"
        /> */}
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 hover:text-blue-900 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          LearnBest
        </h2>
        <div className="hidden md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            {user && (
              <>
                <button onClick={() => navigate("/educator")}>
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button>
                <span>|</span>
                <Link to="/my-enrollments">My enrollments</Link>
              </>
            )}
          </div>
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              Create account
            </button>
          )}
        </div>
        {/* Phone screens */}
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
          <div className="hidden sm:flex items-center gap-2 justify-center max-sm:text-xs">
            {user && (
              <>
                <button onClick={() => navigate("/educator")}>
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button>
                <span>|</span>
                <Link to="/my-enrollments">My enrollments</Link>
              </>
            )}
          </div>
          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} alt="user-icon" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
