import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: []
})

export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
