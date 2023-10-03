import Header from "../SharedPages/HeaderPages/Header";
import LeftSideNav from "../SharedPages/LeftSideNavPage/LeftSideNav";
import Navbar from "../SharedPages/NavbarPages/Navbar";
import RightSideNav from "../SharedPages/RightSideNavPage/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> 
                <div className=" border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" border md:col-span-2">
                    <h2 className="text-3xl "> new coming soon</h2>
                </div>
                <div className=" border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;