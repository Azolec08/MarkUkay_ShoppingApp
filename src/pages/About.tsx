import Button from "@mui/material/Button";
import Promo from "../data/promo.json";
import { useState } from "react";
import { Link } from "react-router-dom";
export function about() {
  const [pic, setPic] = useState("/images/titanic.jpg");
  return (
    <div className="bg-home-bg bg-center h-full p-5">
      <div className="flex items-center justify-center">
        <h1 className="py-5 text-3xl font-bold text-violet-500 md:text-5xl">
          WEB ABOUT
        </h1>
      </div>
      <div
        className="flex flex-col gap-y-5 
      md:grid md:grid-cols-1 lg:grid-cols-2
      "
      >
        <div className="flex gap-x-3  items-center justify-center">
          <div className="flex flex-col gap-2 md:gap-4">
            {Promo.map((prompic, index) => {
              const { img } = prompic;
              return (
                <>
                  <div
                    className="ima_ge "
                    key={index}
                    onClick={() => setPic(img)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-16 h-11  rounded-sm cursor-pointer
                      md:w-40 md:h-20
                      "
                      cursor-pointer
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="flex w-52 h-52  items-center shadow-md 
          md:w-72 md:h-96 "
          >
            <img className="h-full w-full p-2" src={pic} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center my-5 ">
          <p className="w-80 text-justify py-2 px-8 text leading-6  bg-white">
            Shopping Cart is a software that allows website visitors to select,
            reserve, and purchase a product or service from an eCommerce
            interface. You can add and remove items as you wish, just like you
            would in the real world. Shopping cart software is a fundamental
            part of the online shopping experience.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Link to="/store">
          <Button variant="contained" className="bg-blue-500 w-48 p-2">
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default about;
