import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { StudentService } from "../student.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
  notes:any[]
  question:string = "";
  constructor(private _studentService:StudentService) { 

  }

  ngOnInit() {
    this._studentService.getNotes().subscribe(notes =>{
      this.notes = notes
      console.log(this.notes);
    })
  }

  addNewQuestion(question:string){
    var newQuestion = {
      question:question,
      teacher_id:"",
      student_id:""
    }
    this.question = "";
    this._studentService.addQuestions(newQuestion);
    
  }


}
