import {actions, decrement, dividir, increment, multiplicar, reset} from "./contador.action";

export function contadorReducer(state: number = 0, action: actions) {

    switch (action.type) {
        case increment:

            return state + 1;

        case decrement:

            return state - 1;

        case multiplicar:
            return state * (action?.payload ?? 0);

        case dividir:
            return state / (action?.payload ?? 0);

        case reset:
            return state = 0;

        default:
            return state;
    }
}
