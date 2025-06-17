import { CommonModule } from '@angular/common';
import { Student } from '../../../models/student.model';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  standalone: true,
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  imports: [CommonModule, MatPaginatorModule]
})

export class StudentTableComponent {
  pageSize = 10;
  pageIndex = 0;
  length!: number;
  pageSizeOptions = [3, 5, 10, 25];

  disabled = false;
  hidePageSize = false;
  pageEvent!: PageEvent;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  displayedStudents: Student[] = [];
  @Input() students: Student[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updateDisplayedStudents();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['students']) {
      this.length = this.students.length;
      this.pageIndex = 0;
      this.updateDisplayedStudents();
    }
  }

  updateDisplayedStudents() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.length = this.students.length
    this.displayedStudents = this.students.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedStudents();
  }

  trackById(index: number, student: Student) {
    return student.id;
  }
}
