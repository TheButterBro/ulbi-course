import {StateSchema} from "app/providers/StoreProvider";
import {AsyncThunk} from "@reduxjs/toolkit";

type ActionCreatorType<Returned, Arg, RejectedValue>
    = AsyncThunk<Returned, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
    dispatch: jest.Mocked<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}