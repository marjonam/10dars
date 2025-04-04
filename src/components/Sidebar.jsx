import { MdSpaceDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-gradient-to-r bg-pink-200 col-start-1 col-end-3">
      <div className="flex items-start justify-center pt-10 px-4 mb-15 cursor-pointer">
        <img
          className="w-20 h-20 mb-3 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <h2 className="text-xl font-semibold ">Hello, {user.displayName}</h2>
      </div>
      <ul className="font-semibold px-0 flex flex-col gap-4 grow">
        <li>
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300 active"
          >
            <MdSpaceDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
          >
            <CiCirclePlus /> Create
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
          >
            <IoMdSettings /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
