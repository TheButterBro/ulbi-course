import {loginActions, loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {DeepPartial} from "@reduxjs/toolkit";
import {LoginSchema} from "features/AuthByUsername";

describe("loginSlice", () => {
    test("setUsername test", () => {
        const state: DeepPartial<LoginSchema> = { username: "test" };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: "123" })
    })

    test("setPassword test", () => {
        const state: DeepPartial<LoginSchema> = { password: "test" };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: "123" })
    })
})