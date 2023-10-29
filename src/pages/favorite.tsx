import Email from "../pages/Email";
import Footer from "../pages/Footer";

function favorite() {
  return (
    <>
      <div className="bg-home-bg h-screen w-full bg-center">
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl text-white font-semibold mt-5">MESSAGE US</h1>
          <div className="mt-5">
            <Email />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default favorite;
