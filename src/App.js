import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Reservation from "./Reservation";
import Login from "./Login";
import Registration from "./Registration";
import Header from "./component/Header";
import Contact from "./Contact";
import Footer from "./component/Footer";
import Policy from "./Policy";
import Terms from "./Terms";
import { AlertProvider } from "./context/alertContext";
import Alert from "./component/Alert";

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
        <Alert />
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
