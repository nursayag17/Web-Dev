import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` @if(isLoggedIn){
    <p>Welcome back, Friend!</p>
  }
  @else{
    <p>No, the server is not running</p>
  }
  `,
})
export class App {
  isLoggedIn = true;
}
