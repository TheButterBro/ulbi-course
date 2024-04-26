import {StoryFn} from "@storybook/react";
import "app/styles/index.scss";
import {StoreProvider} from "app/providers/StoreProvider";

export const storeDecorator = (Story: StoryFn) => {

    return (
        <StoreProvider>
            <Story/>
        </StoreProvider>
    );
}