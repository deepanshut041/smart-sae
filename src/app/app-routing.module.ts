import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'},
    {path: 'student', loadChildren: './student/student.module#StudentModule'}
    ]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}