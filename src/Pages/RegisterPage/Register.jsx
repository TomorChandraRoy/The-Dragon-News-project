import { Link } from "react-router-dom";
import Navbar from "../SharedPages/NavbarPages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';



const Register = () => {
    const{createUser} = useContext(AuthContext);
    console.log(createUser);

    const handleRegsitar = e =>{
        e.preventDefault();
            e.preventDefault();
            // console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            console.log(email,password,name, photo );

            // create User
            createUser(email,password)
            
            .then((result) => {
                const user = result.user;
                console.log(user);
                swal("Good job!", "You clicked the button!", "success");

                
              
              })
              .catch((error) => {
                // const errorMessage = error.message;
                console.log(error);
              
              });
            
    }
    return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form onSubmit={handleRegsitar}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl shadow-teal-300 border sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Register your account</p>

            <div>
                <p>Your Name</p>
              <label htmlFor="name" className="sr-only">name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg  bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div>
                <p>Your Photo URL</p>
              <label htmlFor="name" className="sr-only">name</label>
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  required
                  className="w-full rounded-lg  bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            <div>
                <p>Your Email</p>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg  bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
                <p>Your Password</p>
              <label htmlFor="password" className="sr-only"> Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full rounded-lg  bg-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
              <label className="label">
                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            
            <button 
              type="submit"
              className="block w-full rounded-lg bg-gray-600 px-5 py-3 text-sm font-medium text-white">
              Register 
            </button>
         
            <p className="text-center text-sm text-gray-500 font-bold"> Your have an  account? <Link to='/login' className="text-red-500"> LogIn </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;