import {StoryFn} from "@storybook/react";
import "app/styles/index.scss";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {ThemeProvider} from "app/providers/ThemeProvider";

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    );
}