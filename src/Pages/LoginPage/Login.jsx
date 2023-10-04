import { Link, useLocation,  useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/NavbarPages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';



const Login = () => {

    const {signIn} = useContext(AuthContext);

    // PrivateRoute thake asche 
    const location =useLocation();
    console.log('location in the login page',location );

    const navigate = useNavigate();

    // const [useSucc, setUseSucc] =useState('')


    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // signIn
        signIn(email,password)
        .then((result) =>{
            console.log(result.user);
            swal("Good job!", "You clicked the button!", "success");

          // navigate login
          navigate(location?.state? location.state : '/')
          
        })
        .catch(error =>{
            console.log(error);
           
          
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form onSubmit={handleLogin}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl shadow-teal-300 border sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Sign in to your account</p>

            <div>
                <p>Email address</p>
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
                <p>Password</p>
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
              Sign in
            </button>
           
            <p className="text-center text-sm text-gray-500 font-bold">Do not have an  account? <Link to='/register' className="text-red-500"> Sign up </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;