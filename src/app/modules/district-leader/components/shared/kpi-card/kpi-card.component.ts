import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  imports: [CommonModule],
})

export class KpiCardComponent {
  @Input() title = '';
  @Input() average = 0;
}
