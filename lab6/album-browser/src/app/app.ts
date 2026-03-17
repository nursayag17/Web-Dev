import { Component } from '@angular/core'
import { RouterOutlet, RouterModule ,RouterLink} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}