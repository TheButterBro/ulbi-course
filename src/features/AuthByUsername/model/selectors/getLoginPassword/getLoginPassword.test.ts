import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe("getLoginPassword", () => {
    test('test get password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: '123'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    })
})
