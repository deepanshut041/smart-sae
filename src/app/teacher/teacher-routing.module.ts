import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./students/students.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeacherComponent } from "./teacher.component";

const routes: Routes = [{path:'',component:TeacherComponent,children:[
        {path: '', component: DashboardComponent},
        {path: 'login', component: LoginComponent},
        {path: 'students', component: StudentsComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeacherRoutingModule{

}