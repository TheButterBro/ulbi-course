import { StoryFn} from "@storybook/react";
import "app/styles/index.scss";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
}

export const storeDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story: StoryFn) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
            <Story/>
        </StoreProvider>
    );
}