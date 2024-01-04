import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  studentForm!: FormGroup;
  existingStudents!: string | any;
  selectedStudent: any = {};
  showErrorPopup = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.existingStudents = this.studentService.getStudents();
    this.selectedStudent = this.existingStudents[0];
    this.initForm();
  }

  initForm(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      previousSchool: ['', Validators.required],
      previousClass: ['', Validators.required],
      previousClassName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      parentMobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      previousGrades: ['', Validators.required],
      favoriteSubject: ['', Validators.required],
    });
  }
  onSelectStudent(student: any) {
    this.selectedStudent = student;
  }
  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value);
    this.existingStudents = this.studentService.getStudents();
    this.studentForm.reset();
    } else {
      this.showErrorPopup = true;
    }
  }
  closePopup(): void {
    this.showErrorPopup = false;
  }
}
