import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() contador!: number;

  @Output() nietoCambia = new EventEmitter<number>();

  constructor() { }

  public dividir() {
    this.contador /= 2;

    this.nietoCambia.emit(this.contador);
  }

  public multiplicar() {
    this.contador *= 2;

    this.nietoCambia.emit(this.contador);
  }
}
