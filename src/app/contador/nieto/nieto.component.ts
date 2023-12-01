import {Component} from '@angular/core';
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {ResetAction} from "../contador.action";

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

  public contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('count').subscribe((state) => {
      this.contador = state;
    });
  }


  resetCount() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
