import {StoryFn} from "@storybook/react";
import "app/styles/index.scss";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    );
}