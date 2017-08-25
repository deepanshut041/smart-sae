// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from "./teacher-routing.module";
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// This Module's Components
import { TeacherComponent } from './teacher.component';
import { StudentsComponent } from "./students/students.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeacherService } from "./teacher.service";

@NgModule({
    imports: [CommonModule, TeacherRoutingModule,AngularFireDatabaseModule,FormsModule,HttpModule

    ],
    declarations: [
        TeacherComponent,StudentsComponent,LoginComponent,DashboardComponent
    ],
    exports: [
        TeacherComponent,
    ],
    providers: [TeacherService]
})
export class TeacherModule {

}
