import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, MatIconModule]
})

export class SidebarComponent {
  active = 'dashboard'
  @Input() visible = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  sidebar = [
    {
      title: 'Quick Links',
      items: [
        { icon: 'menu', label: 'Dashboard', key: 'dashboard' },
        { icon: 'report', label: 'Reports', key: 'reports' },
        { icon: 'settings', label: 'Settings', key: 'settings' },
      ]
    },
    {
      title: 'Menu',
      items: [
        { icon: 'school', label: 'Schools', key: 'schools' },
        { icon: 'people', label: 'Students', key: 'students' },
      ]
    }
  ];

  getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      menu: 'fas fa-home',
      report: 'fas fa-chart-line',
      settings: 'fas fa-cog',
      school: 'fas fa-school',
      people: 'fas fa-users'
    };
    return iconMap[icon] || 'fas fa-question-circle';
  }

  onToggleClick(key: string): void {
    this.active = key;
    this.toggleSidebar.emit();
  }
}
