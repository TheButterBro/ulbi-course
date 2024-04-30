import type {Meta, StoryObj} from '@storybook/react';
import {LoginForm} from './LoginForm';
import {storeDecorator} from "shared/config/storybook/storeDecorator/storeDecorator";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [
        storeDecorator({
            login: {
                username: 'admin',
                password: 'admin'
            }
        })
    ],
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK)
    ]
};

export const WithError: Story = {
    decorators: [
        storeDecorator({
            login: {
                username: 'admin',
                password: 'admin',
                error: 'Неверные имя пользователя или пароль',
            }
        })
    ]
};