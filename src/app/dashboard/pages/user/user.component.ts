import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);
  public user= toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById(id))
    )
  )
  //title Label
  titleLabel = computed( ()=> {
    if(this.user()){
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return 'Información del usuario';
  })




  constructor() {
    //this.route.params.subscribe(resp=> console.log({resp}))
  }
}
