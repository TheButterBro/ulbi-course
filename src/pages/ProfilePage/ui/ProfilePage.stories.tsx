import type { Meta, StoryObj } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import ProfilePage from "./ProfilePage";
import {storeDecorator} from "shared/config/storybook/storeDecorator/storeDecorator";

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [storeDecorator({})]
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Light: Story = {
};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
