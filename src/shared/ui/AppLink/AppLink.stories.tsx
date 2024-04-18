import type { Meta, StoryObj } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import {AppLink, AppLinkTheme} from "./AppLink";

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    }
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        children: "Example",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: "Example",
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const Inverted: Story = {
    args: {
        children: "Example",
        theme: AppLinkTheme.INVERTED,
    },
};

export const InvertedDark: Story = {
    args: {
        children: "Example",
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [themeDecorator(Theme.DARK)]
};
