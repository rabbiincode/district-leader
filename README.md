# 🏫 District Leader Dashboard – Angular

A standalone Angular application that displays district leader metrics with interactive filtering, responsive design, and mock data visualization.

## 📁 Project Structure

```
src/
  app/
    modules/
      district-leader/
      components/
        home/
        filters/
        student-table/
        shared/
          kpi-card/
          navigation/
            header/
            footer/
            sidebar/
      models/
        student.models.ts
      services/
        mock-data.service

public/
  assets/
    images/
    mock-students.json
```

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
ng serve -o
```

### 3. Mock Data Setup
Mock data file: `assets/mock-students.json`

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "math": 85,
    "ela": 78,
    "grade": "5",
    "semester": "Spring",
    "status": "active"
  },
  ...
]
```

Data is fetched using Angular's `HttpClient` inside `StudentService`.

## 📊 Components Overview

### ✅ `HomeComponent`

Main container page.

- **Child Components**:
  - `<app-header>`
  - `<app-sidebar>`
  - `<app-filters>`
  - `<app-kpi-card>`
  - `<app-student-table>`

- **State**:
  - Uses Angular **Signals** for filter and student state.

- **Key Methods**:
  - `getAverage(subject: 'math' | 'ela'): number`
  - `onFilterChange(updated: Partial<Filter>)`: updates reactive filter state.

### ✅ `FiltersComponent`

Allows users to filter student data.

- **Outputs**:
  - `@Output() filterChange = new EventEmitter<Partial<Filter>>()`

- **Fields**:
  - Grade Range
  - Grade
  - Semester
  - Status
  - Teacher
  - Student

- **UI**:
  - Uses Angular Material components (`mat-select`, `mat-form-field`, `mat-input`)
  - Uses Font Awesome Icons

### ✅ `KpiCardComponent`

Reusable card to show subject average.

- **Inputs**:
  - `@Input() title: string`
  - `@Input() average: number`

### ✅ `StudentTableComponent`

Displays filtered students in table format.

- **Inputs**:
  - `@Input() students: Student[]`

### ✅ `SidebarComponent`

Responsive side navigation.

- **Inputs**:
  - `active: string`
  - `visible: boolean`
  - `isMobile: boolean`
  - `sidebar: SidebarSection[]`
- **Methods**:
  - `closeSidebar(key?: string)`

- **Features**:
  - Collapsible on mobile
  - Desktop toggle button
  - FontAwesome + Material icons
  - Active state styling

### ✅ `HeaderComponent`

Top navigation bar.

- **Features**:
  - Toggle button for sidebar
  - Responsive design
  - Logo/title

## 🧠 Business Logic

### `getAverage(subject: 'math' | 'ela'): number`
```ts
getAverage(subject: 'math' | 'ela'): number {
  const students = this.filteredStudents();
  if (!students.length) return 0;
  const total = students.reduce((sum, s) => sum + s[subject], 0);
  return Math.round((total / students.length) * 100) / 100;
}
```

### Responsive Sidebar Toggle
```ts
function isMobile(): boolean {
  return window.innerWidth < 768;
}
```

## 🧪 Testing Requirements

- [ ] Unit test `getAverage()` logic
- [ ] Verify sidebar toggle on mobile and desktop
- [ ] Test filtering logic via `FiltersComponent`
- [ ] Validate table updates based on filters
- [ ] Confirm fallback UI when no students match
- [ ] Confirm accessibility attributes (`aria-label`, `role`)

## 📦 Services

### `StudentService`

- **Method**:
  ```ts
  getStudents(): Observable<Student[]>
  ```
  Returns observable of mocked students from `mock-students.json`.

## 📌 Assumptions

- Mock data is used in place of API.
- Filters are applied client-side.
- Responsive behavior based on window width.
- Sidebar state resets on route change.

## ⚠️ Limitations

- No server-side filtering
- No persistent sidebar state across navigation
- Minimal form validation
- Requires browser environment (`window` usage)

## 👓 Accessibility

- Uses semantic HTML (`<main>`, `<section>`, `<nav>`)
- Buttons and interactive elements have labels
- Sidebar and modals use proper focus management
- Contrast ratios and font sizes follow WCAG AA

## 🧾 Interfaces

### `Student`
```ts
export interface Student {
  id: number;
  name: string;
  math: number;
  ela: number;
  grade: string;
  semester: string;
  status: string;
}
```

### `Filter`
```ts
export interface Filter {
  gradeRange: string;
  grade: string;
  semester: string;
  status: string;
  teacher: string;
  student: string;
}
```

## ✍️ Author & Credits

Built with ❤️ using Angular Standalone Components, Signals, Tailwind CSS, Font Awesome and Angular Material.