import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../../models/student.model';
import { Component, inject, signal } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { MockDataService } from '../../../services/mock-data.service';
import { KpiCardComponent } from '../shared/kpi-card/kpi-card.component';
import { FooterComponent } from '../shared/navigation/footer/footer.component';
import { HeaderComponent } from '../shared/navigation/header/header.component';
import { StudentTableComponent } from '../student-table/student-table.component';
import { SidebarComponent } from '../shared/navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule, FooterComponent, FormsModule, HeaderComponent,
    SidebarComponent, KpiCardComponent, StudentTableComponent, FiltersComponent
  ],
})

export class HomeComponent {
  private dataService = inject(MockDataService);
  screenWidth = signal(1024);
  students = signal<Student[]>([]);
  sidebarVisible = signal(false);
  isMobile = () => this.screenWidth() < 768;

  filters = signal({
    gradeRange: 'All', grade: 'All Grades',
    semester: 'All', status: 'All Status', teacher: '', student: ''
  });

  constructor() {
    this.loadData();
    if (typeof window !== 'undefined') {
      this.screenWidth.set(window.innerWidth);
      window.addEventListener('resize', () => this.screenWidth.set(window.innerWidth));
    }
  }

  loadData() {
    this.dataService.getStudents().subscribe((data) => {
      this.students.set(data);
    });
  }

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }

  closeSidebar() {
    this.sidebarVisible.set(false);
  }

  get filteredStudents() {
    return this.students().filter(s =>
      (this.filters().gradeRange === 'All' || s.gradeRange === this.filters().gradeRange) &&
      (this.filters().grade === 'All Grades' || s.grade === this.filters().grade) &&
      (this.filters().semester === 'All' || s.semester === this.filters().semester) &&
      (this.filters().status === 'All Status' || s.status === this.filters().status) &&
      (this.filters().teacher === '' || s.teacher.toLowerCase().includes(this.filters().teacher.toLowerCase())) &&
      (this.filters().student === '' || s.name.toLowerCase().includes(this.filters().student.toLowerCase()))
    );
  }

  getAverage(subject: 'math' | 'ela'): number {
    const students = this.filteredStudents;
    if (!students.length) return 0;
    return students.reduce((sum, s) => sum + s[subject], 0) / students.length;
  }

  onFilterChange(updated: Partial<ReturnType<typeof this.filters>>): void {
    this.filters.set({ ...this.filters(), ...updated });
  }
}
