import { Action } from "@ngrx/store";


export const increment = '[Contador] INCREMENTAR';

export const decrement = '[Contador] DECREMENTAR';


export class IncrementAction implements Action {
    readonly type = increment;
}

export class DecrementAction implements Action {
    readonly type = decrement;
}