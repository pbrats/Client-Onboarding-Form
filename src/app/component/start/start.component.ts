import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ChatboxComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}
