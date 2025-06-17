import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDataService } from '../../../services/mock-data.service';

const mockStudents = [
  {
    id: 1, name: 'Test Student', teacher: 'Test Teacher', grade: '11th Grade',
    gradeRange: '9-12', semester: 'Winter', math: 90, ela: 95, status: 'Excellent', school: '', principal: ''
  },
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: MockDataService,
          useValue: {
            getStudents: () => of(mockStudents)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load students and filter correctly', () => {
    expect(component.filteredStudents.length).toBe(1);
    expect(component.filteredStudents[0].name).toBe('Test Student');
  });
});
