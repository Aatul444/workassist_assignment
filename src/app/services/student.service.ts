import { Injectable } from '@angular/core';
import { Student } from '../interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private storageKey = 'students';

  constructor() { }

  getStudents(): Student[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveStudent(student: Student): void {
    const students = this.getStudents();
    students.push(student);
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }
}
