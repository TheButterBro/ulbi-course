import type { Meta, StoryObj } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import {Navbar} from "./Navbar";
import {storeDecorator} from "shared/config/storybook/storeDecorator/storeDecorator";

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [
        storeDecorator({
            login: {
                username: 'admin',
                password: 'admin',
            }
        })
    ]
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
