import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TeacherService } from "../teacher.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})

export class StudentsComponent implements OnInit {
  students: any[];
  constructor(private _teacherService: TeacherService) { 

  }

  ngOnInit() {
    this._teacherService.getStudents().subscribe(students =>{
      this.students = students
      console.log(this.students);
    })
    
  }

  addNewStudent(
    student_id:string,
    full_name:string,
    father_name:string,
    email:string,
    password:string
  ){
    var newStudent = {
      student_id:student_id,
      full_name:full_name,
      father_name:father_name,
      email:email,
      teacher_id:"",
      password:password
    }
    this._teacherService.addStudents(newStudent);
  }
  removeStudent(key){
    this.addNewStudent
    this._teacherService.deleteStudents(key);
  }
}
