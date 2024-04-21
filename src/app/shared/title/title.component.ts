import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styles: ``,
})
export class TitleComponent {
  @Input({ required: false }) momento = signal<number>(0);
  @Input({ required: true }) title?: string;
  @Input({ transform: booleanAttribute }) widthShadow = false;
  constructor() {
    this.momento.update((valor) => valor * valor);
    console.log(this.momento());
  }
}
