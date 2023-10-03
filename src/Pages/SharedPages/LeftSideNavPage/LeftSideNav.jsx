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
               categories.map(single => <NavLink to={`/categories/${single.id}`} className="block ml-4 text-xl font-semibold " key={single.id}>{single.name}</NavLink>) 
            }
        </div>
    );
};

export default LeftSideNav;