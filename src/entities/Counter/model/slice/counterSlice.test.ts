import {counterReducer, CounterSchema} from "entities/Counter";
import {counterActions} from "./counterSlice";

describe('counterSlice.test', () => {
    test('increment test', () => {
        const state: CounterSchema = {
             value: 10,
        }
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    })

    test('decrement test', () => {
        const state: CounterSchema = {
            value: 10,
        }
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    })

    test('increment with default state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    })
})