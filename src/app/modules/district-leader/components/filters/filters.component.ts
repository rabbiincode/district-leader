import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule]
})

export class FiltersComponent {
  @Output() filterChange = new EventEmitter<any>();
  teacher = signal('');
  student = signal('');
  gradeRange = signal('All');
  semester = signal('All');
  grade = signal('All Grades');
  status = signal('All Status');
  grades = ['All', '6-8', '9-12'];
  semesters = ['All', 'Spring', 'Winter'];
  allGrades = ['All Grades', '11th Grade', '12th Grade'];
  allStatus = ['All Status', 'Excellent', 'Good', 'Average'];

  updateFilters() {
    if (typeof document !== 'undefined') {
      this.filterChange.emit({
        gradeRange: this.gradeRange(),
        grade: this.grade(),
        semester: this.semester(),
        status: this.status(),
        teacher: this.teacher(),
        student: this.student(),
      });
    }
  }
}
