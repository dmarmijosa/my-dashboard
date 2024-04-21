import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <app-title title="Change Detection" />
    <pre>{{ frameworkAsSignal() | json }}</pre> <pre>{{frameworkAsProperty | json}}</pre>`,
})
export class ChangeDetectorComponent {
  frameworkAsSignal = signal({ name: 'Angular', releaseDate: 2016 });
  frameworkAsProperty = { name: 'Angular', releaseDate: 2016 };

  constructor(){
    setTimeout(()=>{
      //this.frameworkAsProperty.name='React',
      this.frameworkAsSignal.update(value=>({
        ...value,
        name:'React'
      }))
      console.log('Hecho');
    },3000)
  }
}
