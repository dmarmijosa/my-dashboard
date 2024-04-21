import { Component, inject } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/services/users.service';

@Component({
    standalone: true,
    templateUrl: './users.component.html',
    styles: ``,
    imports: [TitleComponent, RouterModule]
})
export class UsersComponent {
  public userService = inject(UsersService);
}
