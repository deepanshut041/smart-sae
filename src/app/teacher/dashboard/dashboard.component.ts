import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TeacherService } from "../teacher.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
  questions:any[];
  notes:any[];
  question:string = "";
  activeQuestion:string = "";
  answerNote:string = "";
  constructor(private _teacherService: TeacherService) { 
    
  }

  ngOnInit() {
    this._teacherService.getQuestions().subscribe(questions =>{
      this.questions = questions
      console.log(this.questions);
    })
    this._teacherService.getNotes().subscribe(notes =>{
      this.notes = notes
      console.log(this.notes);
    })
  }
  onAnswer(question:string,key:string){
    this.question = question;
    this.activeQuestion = key
    console.log(this.activeQuestion)
  }

  addNewNotes(question:string,answer:string){
    var newNote:any;
    if(question !=""){
    newNote = {
      question:question,
      answer:answer,
      teacher_id:""
    }}
    else{
      newNote = {
        answer:answer,
        teacher_id:""
      }
    }
    this._teacherService.addNotes(newNote)
    if(this.activeQuestion != ""){
      this._teacherService.deleteQuestions(this.activeQuestion)
    }
    this.question = "";
    this.activeQuestion = "";
    this.answerNote = "";
  }
}
