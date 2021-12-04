import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { authState } from "../state/authState";

export const Routing = () => {
    const isAuthorized = useRecoilValue(authState);

    return (
        <BrowserRouter>
            {
                isAuthorized ?
                  <ProtectedRoute />  
                : <PublicRoute />
            }
        </BrowserRouter>
    );
}

const PublicRoute = () => <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
</Routes>

const ProtectedRoute = () => <Routes>
    <Route path="/" element={<Home />} />
</Routes>