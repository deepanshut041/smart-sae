// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// This Module's Components
import { StudentComponent } from './student.component';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentService } from "./student.service";
import { AuthGuard } from "./auth-gaurd.service";
@NgModule({
    imports: [CommonModule, StudentRoutingModule,AngularFireDatabaseModule,FormsModule,HttpModule

    ],
    declarations: [
        StudentComponent, LoginComponent, DashboardComponent
    ],
    exports: [
        StudentComponent,
    ],
    providers: [StudentService,AuthGuard]
})
export class StudentModule {

}
