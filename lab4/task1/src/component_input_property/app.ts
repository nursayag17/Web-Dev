import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: ` <app-user user name = ' Simran' /> `,
  imports: [User],
})
export class App {}
