import { ThemeProvider } from '@mui/material';
import './App.css';
import { Login } from './pages/Login';
import { theme } from './theme/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Login />
            </div>
        </ThemeProvider>
    );
}

export default App;
