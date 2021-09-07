import styled from 'styled-components';
import Header from './component/Header';
import Generate from './component/Generate';
import { lightTheme, darkTheme } from './resource/theme';
import { themes } from './resource/contants';
import LightModeIcon from './assets/lightModeIcon';
import DarkModeIcon from './assets/darkModeIcon';
import IconButton from './component/IconButton';
import useDarkTheme from './hooks/useDarkTheme';
// import { getTheme, setTheme, themed } from './hooks/useDarkTheme';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const AppContainer = styled.div`
	background: ${({ theme }) => theme.pageBg};
  	height:inherit;
  	width:inherit;
`;

const App = () => {
    const [theme, themeToggler] = useDarkTheme();
    const [darkMode, setDarkMode] = useState(false);
    const selectedTheme = theme === themes.LIGHT ? lightTheme : darkTheme;

    useEffect(() => setDarkMode(theme === themes.LIGHT ? false : true), [theme]);
    
    const handleThemeChange = () => themeToggler();

    return (
        <ThemeProvider theme={selectedTheme}>
            <AppContainer>
                <IconButton onClick={handleThemeChange}
                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <Header />
                <Generate />
            </AppContainer>
        </ThemeProvider>

    );
};

export default App;
