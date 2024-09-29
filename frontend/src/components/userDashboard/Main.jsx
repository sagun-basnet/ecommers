import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Main = () => {
    return (
        <div className="flex">
            <div className="h-[100vh] w-[18%]">
                <Sidebar />
            </div>
            <div className="w-[82%] flex flex-col bg-[#F1F5F9]">
                <Topbar />
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Main