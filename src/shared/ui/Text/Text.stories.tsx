import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextTheme} from './Text';
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title example",
        text: "Text example",
    },
};

export const OnluTitle: Story = {
    args: {
        title: "Title example",
    },
};

export const OnluText: Story = {
    args: {
        text: "Text example",
    },
};

export const DefaultDark: Story = {
    args: {
        title: "Title example",
        text: "Text example",
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const OnluTitleDark: Story = {
    args: {
        title: "Title example",
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const OnluTextDark: Story = {
    args: {
        text: "Text example",
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const Red: Story = {
    args: {
        title: "Title example",
        text: "Text example",
        theme: TextTheme.RED,
    },
};


