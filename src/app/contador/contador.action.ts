import { Action } from "@ngrx/store";


export const increment = '[Contador] INCREMENTAR';

export const decrement = '[Contador] DECREMENTAR';

export const multiplicar = '[Contador] MULTIPLICAR';

export const dividir = '[Contador] DIVIDIR';


export class IncrementAction implements Action {
    readonly type = increment;
}

export class DecrementAction implements Action {
    readonly type = decrement;
}

export class MultiplicarAction implements Action {
    readonly type = multiplicar;

    constructor(public payload?: number) { }
}

export class DividirAction implements Action {
    readonly type = dividir;

    constructor(public payload?: number) { }
}

export type actions = IncrementAction | DecrementAction | MultiplicarAction | DividirAction;