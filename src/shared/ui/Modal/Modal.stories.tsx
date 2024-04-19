import type { Meta, StoryObj } from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {themeDecorator} from "shared/config/storybook/themeDecorator/themeDecorator";
import {Modal} from "./Modal";

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
    }
}
export default meta;

type Story = StoryObj<typeof meta>;
export const Light: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque incidunt,\n" +
            "              itaque soluta sunt voluptatum. Accusamus commodi facilis iusto laborum rem! Accusamus\n" +
            "              est officia optio perferendis voluptate? At aut blanditiis consequuntur,\n" +
            "              deserunt distinctio eveniet harum impedit in molestiae omnis perferendis quaerat reiciendis saepe\n" +
            "              sint tempora unde voluptatem voluptatibus. Corporis cupiditate dolore fugiat ipsam laboriosam mollitia\n" +
            "              quibusdam rem veritatis vitae voluptate? Ab accusamus accusantium architecto commodi consectetur delectus\n" +
            "              dolor dolore eaque enim fuga, magni nesciunt odio officiis, pariatur praesentium quisquam quo ullam veniam\n" +
            "              veritatis vitae. Asperiores cum dignissimos, doloribus est, fugit illum iste molestiae, natus perspiciatis\n" +
            "              quaerat repellendus sit tenetur voluptatibus.",
    },
};

export const Dark: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque incidunt,\n" +
            "              itaque soluta sunt voluptatum. Accusamus commodi facilis iusto laborum rem! Accusamus\n" +
            "              est officia optio perferendis voluptate? At aut blanditiis consequuntur,\n" +
            "              deserunt distinctio eveniet harum impedit in molestiae omnis perferendis quaerat reiciendis saepe\n" +
            "              sint tempora unde voluptatem voluptatibus. Corporis cupiditate dolore fugiat ipsam laboriosam mollitia\n" +
            "              quibusdam rem veritatis vitae voluptate? Ab accusamus accusantium architecto commodi consectetur delectus\n" +
            "              dolor dolore eaque enim fuga, magni nesciunt odio officiis, pariatur praesentium quisquam quo ullam veniam\n" +
            "              veritatis vitae. Asperiores cum dignissimos, doloribus est, fugit illum iste molestiae, natus perspiciatis\n" +
            "              quaerat repellendus sit tenetur voluptatibus.",
    },
    decorators: [themeDecorator(Theme.DARK)]
};
