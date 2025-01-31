import { Outlet } from "react-router";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-hidden no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
