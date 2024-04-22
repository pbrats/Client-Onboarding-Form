import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { StartComponent } from './component/start/start.component';
import { BottomComponent } from './component/bottom/bottom.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BottomComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beev';
}
