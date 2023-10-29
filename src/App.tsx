import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import RootLayout from "./RootLayout";
import Favorite from "./pages/favorite";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
