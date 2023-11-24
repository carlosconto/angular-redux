import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { DividirAction, MultiplicarAction } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  public contador!: number;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('count').subscribe((state) => {
      console.log(state);
      this.contador = state;
    })
  }

  public dividir() {
    //this.contador /= 2;
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }

  public multiplicar() {
    //this.contador *= 2;
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }
}
