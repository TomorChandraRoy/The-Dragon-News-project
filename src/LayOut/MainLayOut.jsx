import { Outlet } from "react-router-dom";

const MainLayOut = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            {/* home page ace */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;