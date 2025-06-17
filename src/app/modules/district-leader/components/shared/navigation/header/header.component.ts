import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatIconModule]
})

export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  onToggleClick(): void {
    this.toggleSidebar.emit();
  }
}
