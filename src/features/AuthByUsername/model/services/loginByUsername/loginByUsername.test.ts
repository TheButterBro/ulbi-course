import axios from 'axios';
import {loginByUsername} from "./loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe("LoginByUsername tests", () => {
    test("successful login",  async () => {
        const userValue = { id: '1', username: 'test' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'test', password: 'test'});

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    })

    test("error login",  async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username: 'test', password: 'test'});

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    })

})