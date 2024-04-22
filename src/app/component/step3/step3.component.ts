import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  constructor(private router: Router){}
  submitted : boolean =false;
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.router.navigate(['end']);
    }, 2000);
  }

}
