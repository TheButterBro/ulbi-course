import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe('getLoginIsLoading', () => {
    test('test isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    })

    test('test isLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: false
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    })
})