import { useContext, useState } from "react";
import "../style/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useUserStore } from "../Store/userStore";
import { shopContext } from "../Context/ShopContext";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  // const handleOnClick = () => {
  //   setOpen(!open);
  // };

  const { open, count, favoriteCount, handleOpenOnClick } = useUserStore(
    (state) => state
  );

  const { cartItems } = useContext(shopContext);

  return (
    <div className="sticky top-0 z-20">
      <div
        className="grid grid-cols-2 p-4 bg-home-bg bg-center z-10  shadow-sm shadow-white
      md:grid-cols-6 text-white relative
      "
      >
        <div className="">
          <img
            className="w-12 h-12 ml-2 rounded-full transition-all hover:w-14 hover:h-14 "
            src="/images/avatar.jpg"
            alt=""
          />
        </div>
        <ul
          className="hidden  col-span-3 justify-evenly items-center text-md 
        md:col-span-3 md:flex
        "
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
        <div
          className=" flex justify-end items-center gap-x-4 mr-8
          md:col-span-2 
          "
        >
          <div className="relative">
            <Link to="/favorite">
              <ContactMailIcon className="" />
            </Link>
            {favoriteCount === 0 ? (
              <div></div>
            ) : (
              <div className="absolute bg-red-500 rounded-full text-xs w-6 top-6 left-0 flex justify-center">
                {}
              </div>
            )}
          </div>
          <div className="cursor-pointer relative" onClick={handleOpenOnClick}>
            <ShoppingCartIcon
              className={open ? "text-white" : "text-red-500"}
            />
            {cartItems === 0 ? (
              <div></div>
            ) : (
              <div className="absolute bg-blue-500 rounded-full text-xs w-6 top-6 left-0 flex justify-center">
                {count === 0 ? <div></div> : <div>{count}</div>}
              </div>
            )}
          </div>
          <div
            className="cursor-pointer flex gap-x-4 mt-1 md:hidden"
            onClick={handleShow}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      <div
        className={
          show
            ? "show_animation bg-gray-400 text-white transition-all duration-500"
            : "hidden_animation  text-white transition-all duration-700"
        }
      >
        <ul className="bg-home-bg">
          <Link to="/" onClick={handleShow}>
            <li className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer ">
              <span className="px-4">Home</span>
            </li>
          </Link>
          <Link to="/store" onClick={handleShow}>
            <li className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer">
              <span className="px-4">Store</span>
            </li>
          </Link>
          <Link to="/about" onClick={handleShow}>
            <li className="hover:bg-gray-200 hover:text-black h-9 flex items-center cursor-pointer">
              <span className="px-4">About</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
