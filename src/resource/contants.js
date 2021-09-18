const themes = Object.freeze({
    LIGHT: 'LIGHT',
    DARK: 'DARK',
})

const themed = (lightValue, darkValue) => localStorage.getItem('ToDoTheme') === themes.LIGHT ? lightValue : darkValue;

export {
    themes,
    themed,
}