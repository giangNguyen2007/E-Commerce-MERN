import CartPage from "./pages/Cart/CartPage";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register&Login/Register";
import Login from "./pages/Register&Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PaymentSuccess from "./pages/PaymentSuccess";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Router>
  )

};

export default App;