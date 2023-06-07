import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import AboutUsPage from "./pages/aboutUsPage/aboutUsPage";
import MenuPage from "./pages/menuPage/menuPage";
import MenuItemPage from "./pages/menuItemPage/menuItemPage";
import CartPage from "./pages/cartPage/cartPage";
import PaymentPage from "./pages/paymentPage/paymentPage";
import ItemInfo from "./pages/itemInfo/itemInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/menu/:categoryName" element={<MenuItemPage />} />
        <Route path="/itemInfo/:itemId" element={<ItemInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
