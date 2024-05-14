import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe("getLoginUsername", () => {
    test('test get username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: '123'
            }
        };
        expect(getLoginUsername(state as StateSchema)).toBe('123');
    })
})
