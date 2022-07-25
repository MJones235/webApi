import { useContext } from 'react';
import { AuthStateContext } from '../context/AuthStateContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const Router = () => {
    const { isLoggedIn } = useContext(AuthStateContext);

    return <BrowserRouter>{isLoggedIn ? <ProtectedRoute /> : <PublicRoute />}</BrowserRouter>;
};

const PublicRoute = () => (
    <Routes>
        <Route path="/" element={<Login />} />
    </Routes>
);

const ProtectedRoute = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
);
