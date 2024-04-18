import {StoryFn} from "@storybook/react";
import "app/styles/index.scss";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {BrowserRouter} from "react-router-dom";

export const routeDecorator = (Story: StoryFn) => {
    return (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
    );
}