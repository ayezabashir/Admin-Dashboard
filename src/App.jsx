import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { themeContext } from "./context/themeContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import AllOrders from "./pages/orders/AllOrders";
import Returns from "./pages/orders/Returns";
import OrderTracking from "./pages/orders/OrderTracking";
import Help from "./pages/support/Help";
import Contact from "./pages/support/Contact";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <BrowserRouter>
      <themeContext.Provider value={{ mode, setMode }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders">
              <Route path="all" element={<AllOrders />} />
              <Route path="returns" element={<Returns />} />
              <Route path="tracking" element={<OrderTracking />} />
            </Route>
            <Route path="support">
              <Route path="help" element={<Help />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </themeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
