import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-screen w-full bg-home-bg bg-center">
        <div className=" flex flex-col justify-center items-center w-full h-96 p-12 ">
          <div>
            <img className="w-80 mt-20" src="/images/homepic1.jpg" alt="" />
          </div>
          <div className="pt-3">
            <Button className="font-bold w-56" variant="contained">
              <Link to="/store">Go Shop Now!</Link>
            </Button>
          </div>
        </div>
        <h1></h1>
      </div>
    </>
  );
}

export default Home;
