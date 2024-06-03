import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import GatewayPage from "./pages/GatewayPage";
import GatewayDetails from "./pages/GatewayDetails";
import DeviceDetails from "./pages/DeviceDetails";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gateways" element={<GatewayPage />} />
        <Route path="/gateway/:id" element={<GatewayDetails />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;