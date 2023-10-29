import Cards from "../Components/Cards";
import { PRODUCTS } from "../data/data";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function Store() {
  const [loading, setLaoding] = useState(false);

  useEffect(() => {
    setLaoding(true);
    setTimeout(() => {
      setLaoding(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center mt-5">
          <PulseLoader
            color={"hsla(201, 100%, 54%, 0.99)"}
            loading={loading}
            size={20}
          />
        </div>
      ) : (
        <div className="bg-home-bg bg-center h-fit bg-contain w-full py-8">
          <h1 className="flex justify-center pb-3 text-3xl font-bold text-red-600">
            STORE
          </h1>
          <div
            className="grid justify-center gap-y-6
           grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
          >
            {PRODUCTS.map((allItems, index) => {
              return (
                <>
                  <div key={index}>
                    <Cards {...allItems} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Store;
