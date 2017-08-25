import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map'; 


@Injectable()
export class TeacherService {
  teachers: FirebaseListObservable<any[]>;
  students: FirebaseListObservable<any[]>;
  questions: FirebaseListObservable<any[]>;
  notes: FirebaseListObservable<any[]>;
  teacher_id:string = "3938383"
  constructor(private af:AngularFireDatabase) {
    this.teachers=af.list('/teachers');
    this.students=af.list('/students');
    this.questions=af.list('/questions');
    this.notes=af.list('/notes');
  }

  getTeachers( ){
        this.teachers = this.af.list('/teachers',{query:{
                  orderByChild: 'id'}}) as FirebaseListObservable<any[]>
        return this.teachers;}
  getStudents( ){
        this.students = this.af.list('/students',{query:{
                  orderByChild: 'teacher_id',
                  equalTo: this.teacher_id}}) as FirebaseListObservable<any[]>
        return this.students;}
  getQuestions(){
        this.questions = this.af.list('/questions',{query:{
                  orderByChild: 'teacher_id',
                  equalTo: this.teacher_id
                }}) as FirebaseListObservable<any[]>
        return this.questions;}
  getNotes(){
        this.notes = this.af.list('/notes',{query:{
                  orderByChild: 'teacher_id',
                  equalTo: this.teacher_id
                }}) as FirebaseListObservable<any[]>
        return this.notes;}
  addStudents(student){
        console.log(student);
        student.teacher_id = this.teacher_id;
        var promise=this.af.object(`/students`).update({[student.student_id]:student})
        return promise;
    }
  addQuestions(question){
      console.log(question);
      return this.questions.push(question);
  }
  addNotes(note){
    console.log(note);
    note.teacher_id = this.teacher_id;
    return this.notes.push(note);
  }

  //Deleting thing to FireBase
    deleteQuestions(key){
        this.questions.remove(key);
    }
    deleteStudents(key){
        this.students.remove(key);
    }

}
