import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class StudentService {
  student_id:string;
  questions: FirebaseListObservable<any[]>;
  notes: FirebaseListObservable<any[]>;
  teacher_id:string;
  isLoggedIn = false;
  redirectUrl: string;


  constructor(private af:AngularFireDatabase) {
    this.questions=af.list('/questions');
    this.notes=af.list('/notes');
  }
  getNotes(){
        this.notes = this.af.list('/notes',{query:{
                  orderByChild: 'teacher_id',
                  equalTo: this.teacher_id
                }}) as FirebaseListObservable<any[]>
        return this.notes;}
  addQuestions(question){
      console.log(question);
      question.student_id = this.student_id;
      question.teacher_id = this.teacher_id;
      return this.questions.push(question);
  }
  login(id:string,pass:string): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      var promise=this.af.object(`/students/${id}`) as FirebaseObjectObservable<any>;
      promise.subscribe((item)=>{
        if(pass==item.password){
          this.student_id = item.student_id;
          this.teacher_id = item.teacher_id;
          console.log("logged in")
          return this.isLoggedIn = true;
        }
        else{
          console.log("wrong user name and password")
          return this.isLoggedIn = false;
        }

      })
    
  })
}

  logout(): void {
    this.isLoggedIn = false;
  }


}
