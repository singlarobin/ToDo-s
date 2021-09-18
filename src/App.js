import styled from 'styled-components';
import Generate from './component/Generate';
import { lightTheme, darkTheme } from './resource/theme';
import { themes } from './resource/contants';
import LightModeIcon from './assets/lightModeIcon';
import DarkModeIcon from './assets/darkModeIcon';
import IconButton from './component/IconButton';
import useDarkTheme from './hooks/useDarkTheme';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Circle from './assets/shapes/circle';
import Rectangle from './assets/shapes/rectangle';

const AppContainer = styled.div`
	background: ${({ theme }) => theme.backgroundGradient};
  	height:inherit;
  	width:inherit;
    overflow: inherit;
`;

const CircleContainer = styled.div`
    position: absolute;
    bottom: -2%;
    left: -20%;
    width: 15rem;
    height: 15rem;
    opacity: 0.5;

    @media (min-width: 480px){
        left: -8%;
    }

    @media (min-width: 768px){
        left: -2%;
    }

    @media (min-width: 1024px){
        bottom: 2%;
        left: 6%;
    }

    @media (min-width: 1500px){
        left: 12%;
    }
`;

const RectangleContainer = styled.div`
    position: absolute;
    top: 5%;
    right: 0%;
    width: 10rem;
    height: 15rem;
    transform: rotate(-10deg);
    opacity: 0.5;

    @media (min-width: 480px){
        right: 15%;
    }

    @media (min-width: 768px){
        right: 28%;
    }

    @media (min-width: 1024px){
        top: 2%;
        right: 6%;
        transform: rotate(0deg);
    }

    @media (min-width: 1500px){
        right: 15%;
    }
`;

const EllipseContainer = styled.div`
    position: absolute;
    bottom: -30%;
    right: -80%;
    width: 35rem;
    height: 25rem;
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.ellipseGradient};
    border-radius: 50%;
    filter: blur(1rem);

    @media (min-width: 480px){
        right: -30%;
    }

    @media (min-width: 768px){
        right: -20%;
        bottom: -25%
    }

    @media (min-width: 1024px){
        bottom: -15%;
        right: -8%;
    }

    @media (min-width: 1500px){
        right: 2%;
    }
`;


const App = () => {
    const [theme, themeToggler] = useDarkTheme();
    const [darkMode, setDarkMode] = useState(false);
    const selectedTheme = theme === themes.LIGHT ? lightTheme : darkTheme;

    useEffect(() => setDarkMode(theme === themes.LIGHT ? false : true), [theme]);

    const handleThemeChange = () => themeToggler();
    console.log(theme);
    return (
        <ThemeProvider theme={selectedTheme}>
            <AppContainer>
                <IconButton onClick={handleThemeChange}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer', zIndex: '4' }}>
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <Generate />

                <CircleContainer>
                    <Circle fill={darkMode ? darkTheme.accentColor3 : lightTheme.accentColor3}
                        style={{ height: 'inherit', width: 'inherit' }} />
                </CircleContainer>

                <RectangleContainer>
                    <Rectangle fill={darkMode ? darkTheme.accentColor1 : lightTheme.accentColor1}
                        style={{ height: 'inherit', width: 'inherit' }} />
                </RectangleContainer>

                <EllipseContainer style={{ opacity: darkMode ? '0.5' : '1' }} />
            </AppContainer>

        </ThemeProvider>

    );
};

export default App;
