import React from "react";
import { Link } from "react-router-dom";
import { useSignOut } from "../hooks/useLogout";
function Navbar() {
  const { isPending, signout } = useSignOut();
  return (
    <nav className="bg-base-200">
      <div className="navbar px-5">
        <div className="navbar-start">
          <Link to="/">
            <img
              className="hidden w-12 rounded-full md:block"
              src="./daisy.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <button onClick={signout} className="btn btn-secondary">
            log out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
