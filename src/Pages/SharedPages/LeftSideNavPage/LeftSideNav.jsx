import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] =useState([])

    useEffect (()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Caterogy</h2>
            {
               categories.map(single =><div key={single.id}>
                <div>
                <NavLink to={`/categories/${single.id}`} className="block ml-4 text-sm font-semibold " >{single.name}</NavLink>
                </div>
                <div>
                    
                </div>
               </div>)
             
            }
        </div>
    );
};

export default LeftSideNav;