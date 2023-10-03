import { FcGoogle} from 'react-icons/fc';
import { BsGithub} from 'react-icons/bs';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';
import bg1 from '../../../assets/bg1.png';

const RightSideNav = () => {
    return (
        <div>
            <div className=' p-4 space-y-5 mb-6'>
            <h2 className="text-3xl ">Login With</h2>
            <button className="btn btn-outline w-full  ">
                <FcGoogle></FcGoogle>
                Log in with google
            </button>
            <button className="btn btn-outline w-full">
                <BsGithub></BsGithub>
                Log in with GitHub
            </button>
            </div>
            
            <div className=' p-4  mb-6'>
            <h2 className="text-3xl mb-4">Find Us On</h2>
            <a className='p-4 flex text-lg items-center border rounded-t-lg' href=''>
                <FaFacebook className='mr-3'></FaFacebook>
                Facebook
            </a>
            <a className='p-4 flex text-lg items-center border-x ' href=''>
                <FaTwitter className='mr-3'></FaTwitter>
                Twitter
            </a>
            <a className='p-4 flex text-lg items-center border rounded-b-lg' href=''>
                <FaInstagram className='mr-3'></FaInstagram>
                Instagram
            </a>
            </div>
            {/* q zone */}
            <div className=' p-4 space-y-5 mb-6'>
            <h2 className="text-3xl ">Q-Zone</h2>
            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
            </div>

            <div>
                <img className='relative' src={bg1} alt="" />
                <div className='absolute mb-10'>
                <h1>Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-secondary'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default RightSideNav;