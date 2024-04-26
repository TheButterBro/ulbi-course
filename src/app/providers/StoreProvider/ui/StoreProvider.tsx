import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, StateSchema} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

interface IStoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};