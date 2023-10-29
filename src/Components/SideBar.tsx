import { useContext } from "react";
import { useUserStore } from "../Store/userStore";
import "../style/sideBar.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Currency } from "../utilities/Currency";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import CartAllItems from "./cartAllItems";
import { shopContext } from "../Context/ShopContext";
import { PRODUCTS } from "../data/data";

function SideBar() {
  const { open, count, handleOpenOnClick } = useUserStore((state) => state);

  const { cartItems, getTotalAmount } = useContext(shopContext);

  return (
    <>
      <div
        className={
          open
            ? "HideSidebar  min-h-fit bg-gray-100 shadow-md shadow-black flex justify-center z-30 bg-home-bg bg-cover"
            : "ShowSidebar  min-h-fit bg-gray-100 shadow-md shadow-black flex justify-center z-30 bg-home-bg bg-cover text-white bg-center"
        }
      >
        <div className=" w-full h-full">
          <div className="p-3 flex justify-between">
            <div className="text-sm font-semibold flex items-center">
              <ShoppingBagIcon className="" />
              SHOPPING BAG
              <span className="text-red-500 ml-1 font-bold">({count})</span>
            </div>
            <div className="cursor-pointer" onClick={handleOpenOnClick}>
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
          <div className="array w-full my-2 overflow-y-scroll flex flex-col gap-y-3">
            {PRODUCTS.map((allData) => {
              if (cartItems[allData.id] !== 0) {
                return (
                  <div>
                    <CartAllItems {...allData} />
                  </div>
                );
              }
            })}
          </div>
          <div className="h-full w-full flex flex-col justify-end">
            <div className="w-full flex justify-between">
              <span className="px-4 font-bold ">
                TOTAL: {Currency(getTotalAmount())}
              </span>
            </div>
            <div className="flex flex-col p-4 gap-y-2 ">
              <Button
                className="bg-gray-200 text-black hover:bg-gray-300"
                variant="contained"
              >
                VIEW CART
              </Button>
              <Button className="bg-black" variant="contained">
                CHECK OUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
