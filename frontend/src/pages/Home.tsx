import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthStateContext } from '../context/AuthStateContext';

export const Home = () => {
    const { logout } = useContext(AuthStateContext);

    return <Button onClick={logout}>Logout</Button>;
};
