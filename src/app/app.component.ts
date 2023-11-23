import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementAction, IncrementAction } from './contador/contador.action';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 0;

    this.store.subscribe((state) => {
      console.log(state);
      this.contador = state.count;
    })
  }

  public incrementar() {
    //this.contador++;
    const action = new IncrementAction();

    this.store.dispatch(action);
  }

  public decrementar() {
    //this.contador--;
    const action = new DecrementAction();

    this.store.dispatch(action);
  }

}
