import './App.css';
import { MainRouter } from './routes/Route';
import ThemeProvider from './theme/style/style';

export const HoumApp = () => {
    return (
        <ThemeProvider theme={'light'}>
            <MainRouter/>
        </ThemeProvider>
    )
}
