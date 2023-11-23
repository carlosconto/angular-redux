import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

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
