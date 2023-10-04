
import { useParams } from "react-router-dom";
import Header from "../SharedPages/HeaderPages/Header";
import RightSideNav from "../SharedPages/RightSideNavPage/RightSideNav";
import Navbar from "../SharedPages/NavbarPages/Navbar";


const NewsDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                   <h2 className="">new detais</h2>
                    <p>{id}</p>
                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;