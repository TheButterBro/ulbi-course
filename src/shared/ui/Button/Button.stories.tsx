import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonTheme} from './Button';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        children: "Example",
    },
};

export const Invisible: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.INVISIBLE,
    },
};

export const Outline: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [themeDecorator(Theme.DARK)]
};
