import { Action } from "@ngrx/store";
import { decrement, increment } from "./contador.action";

export function contadorReducer(state: number = 0, action: Action) {

    switch (action.type) {
        case increment:

            return state + 1;

        case decrement:

            return state - 1;

        default:
            return state;
    }
}