import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, StateSchema} from "app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface IStoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};