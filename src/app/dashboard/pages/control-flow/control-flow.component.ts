import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  public showContent = signal(false);
  grade = signal<Grade>('A');

  frameworks= signal(['Angular', 'Vue', 'Svelte', 'ReactJS'])
  frameworks2= signal(['Angular'])

  toogleContent() {
    this.showContent.update((value) => !value);
    this.grade.update(()=> 'B');
  }
}
