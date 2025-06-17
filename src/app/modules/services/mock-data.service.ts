import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MockDataService {
  private http = inject(HttpClient);
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('/assets/mock-data.json');
  }
}
