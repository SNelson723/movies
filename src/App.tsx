import { Outlet } from "react-router";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-indigo-600 to-emerald-500 flex overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-auto no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
