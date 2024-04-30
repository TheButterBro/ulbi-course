import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonSize, ButtonTheme} from './Button';
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

export const InvisibleInverted: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.INVISIBLE_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.SIZE_L
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.SIZE_XL
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.SIZE_L
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.SIZE_XL
    },
};

export const Disabled: Story = {
    args: {
        children: "Example",
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
