import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/cart";
import ProductDetail from "../pages/ProductDetail";
import WishList from "../pages/Wishlist";
import AfterAuth from "../components/AfterAuth";
import NotFound from "../pages/NotFound";

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={
                <AfterAuth>
                    <Signup />
                </AfterAuth>
            } />
            <Route path="/login" element={
                <AfterAuth>
                    <Login />
                </AfterAuth>
            } />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/product/:id" element={<ProductDetail />} /> 
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Router;