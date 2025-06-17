export interface Student {
  id: number;
  name: string;
  teacher: string;
  grade: string;
  gradeRange: string;
  semester: string;
  math: number;
  ela: number;
  status: 'Excellent' | 'Good' | 'Average';
  school: string;
  principal: string;
}