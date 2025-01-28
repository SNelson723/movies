import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div className="text-fuchsia-100 w-[150px] max-w-[150px] border-r border-r-emerald-500">
      <div className="w-full p-3 border-b border-b-emerald-500 hover:bg-emerald-400 hover:text-slate-800 transition-all duration-200">
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
};

export default SideBar;
