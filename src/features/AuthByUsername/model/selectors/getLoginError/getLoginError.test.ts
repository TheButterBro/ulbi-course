import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe("getLoginError", () => {
    test('test get error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error'
            }
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    })
})
