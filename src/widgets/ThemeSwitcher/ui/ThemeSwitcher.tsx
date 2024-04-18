import {useTheme} from "app/providers/ThemeProvider";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import DarkThemeIcon from 'shared/assets/icons/dark-theme-icon.svg';
import LightThemeIcon from 'shared/assets/icons/light-theme-icon.svg';

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    const svgSize = {
        width: 30,
        height: 30,
    }

    return (
        <Button theme={ButtonTheme.INVISIBLE} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkThemeIcon {...svgSize} /> : <LightThemeIcon {...svgSize} />}
        </Button>
    );
};