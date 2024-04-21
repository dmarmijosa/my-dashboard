import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
    standalone: true,
    templateUrl: './defer-views.component.html',
    styles: ``,
    imports: [HeavyLoadersSlowComponent, TitleComponent]
})
export class DeferViewsComponent {

}
