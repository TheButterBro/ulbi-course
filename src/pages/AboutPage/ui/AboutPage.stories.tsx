import type { Meta, StoryObj } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Light: Story = {
    args: {
        children: "Example",
    },
};

export const Dark: Story = {
    args: {
        children: "Example",
    },
    decorators: [themeDecorator(Theme.DARK)]
};
