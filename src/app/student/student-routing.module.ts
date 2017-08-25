import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StudentComponent } from "./student.component";
import {AuthGuard} from "./auth-gaurd.service";

const routes: Routes = [{path:'',component:StudentComponent,children:[
        {path: '', component: DashboardComponent,canActivate: [AuthGuard]},
        {path: 'login', component: LoginComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentRoutingModule{

}