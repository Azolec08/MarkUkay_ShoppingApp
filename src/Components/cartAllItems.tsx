import { Currency } from "../utilities/Currency";
import "../style/sideBar.scss";
import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useUserStore } from "../Store/userStore";
import { PRODUCTS } from "../data/data";
import PaymentIcon from "@mui/icons-material/Payment";
interface alldata {
  id: number;
  productName: string;
  price: number;
  image: string;
}

function cartItems({ id, productName, price, image }: alldata) {
  const { cartItems, removeFromCart, addToCart } = useContext(shopContext);

  const { incrementCount } = useUserStore();

  const handlePlus = () => {
    addToCart(id);
    incrementCount();
  };

  let itemInfo = PRODUCTS.find((product) => product.id === Number(id));

  return (
    <>
      <div className="grid grid-cols-7 text-sm">
        <div className="col-span-2 flex justify-center">
          <img src={image} alt="" className="w-20 h-14" />
        </div>
        <div className="col-span-3 flex flex-col gap-y-1">
          <p className="py-1 font-semibold">{productName}</p>
          <div className="flex">
            <button
              className="bg-red-500 w-5 text-white"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
            <span className="px-3">{cartItems[id]}</span>
            <button className="bg-blue-500 w-5 text-white" onClick={handlePlus}>
              +
            </button>
            <span className="ml-1">{Currency(price)}</span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-end  mr-3 mt-1 ">
          <span className="cursor-pointer mb-1 text-red-500 font-semibold">
            <PaymentIcon />
          </span>
          <span>{Currency(cartItems[id] * itemInfo!.price)}</span>
        </div>
      </div>
    </>
  );
}

export default cartItems;
