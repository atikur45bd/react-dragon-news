import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
           
           <div className="p-4 space-y-3 mb-6">
            <h2 className="tex-3xl">Login With</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login With Google
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Login With Github
            </button>
           </div>
           <div className="p-4  mb-6">
            <h2 className="tex-3xl">Find Us on</h2>
            <a href="http://" className="p-4 flex items-center text-lg gap-3 border rounded-t-lg">
            <FaFacebook></FaFacebook>
            Facebook
            </a>
            <a href="http://" className="p-4 flex items-center text-lg gap-3 border-x ">
            <FaTwitter></FaTwitter>
            Twitter
            </a>
            <a href="http://" className="p-4 flex items-center text-lg gap-3 border rounded-b-lg">
            <FaInstagram></FaInstagram>
            Instagram
            </a>
           </div>
           {/* Q zone */}
           <div className="p-4 space-y-3 mb-6">
            <h2 className="tex-3xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;