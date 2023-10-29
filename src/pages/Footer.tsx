import HouseIcon from "@mui/icons-material/House";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <div>
      <div
        className=" w-full bg-violet-500 grid justify-center py-2 md:grid-cols-2 lg:grid-cols-4 text-white
        bg-home-bg bg-center bg-contain "
      >
        <div
          className="p-2 flex flex-col items-center 
        md:p-4 
        "
        >
          <h1 className="text-lg font-semibold">Contact</h1>
          <span className="flex items-center">
            <HouseIcon className="text-white" />
            <p className="text-sm">Binangonan Rizal</p>
          </span>
          <span className="flex my-1">
            <PhoneIcon className="text-white" />
            <p className="text-sm">+699306206963</p>
          </span>
          <span className="flex">
            <EmailIcon className="text-white" />
            <p className="text-sm">markangeloceloza380@gmail.com</p>
          </span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Get Help</h1>
          <span className="flex text-sm">
            <div className="cursor-pointer">FAQ</div>
          </span>
          <span className="flex text-sm">
            <div className="cursor-pointer">Return</div>
          </span>

          <span className="flex text-sm">
            <div className="cursor-pointer">Shipping</div>
          </span>
          <span className=" text-sm">
            <div className="cursor-pointer">Payment Options</div>
          </span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Our Stores</h1>
          <span className="flex text-sm">Binangonan Rizal</span>
          <span className="flex text-sm">Angono Rizal</span>
        </div>
        <div
          className="p-2 flex flex-col items-center
        md:p-4
        "
        >
          <h1 className="text-lg font-semibold">Follow Us</h1>
          <div className="flex mt-2">
            <span className="flex">
              <div className="cursor-pointer">
                <img className="w-4" src="/images/facebook.png" alt="" />
              </div>
            </span>
            <span className="flex mx-3">
              <div className="cursor-pointer">
                <img className="w-4" src="/images/twitter.png" alt="" />
              </div>
            </span>
            <span className="flex">
              <div className="cursor-pointer">
                <img className="w-4" src="/images/google.png" alt="" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
