import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './home/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EpisodeService} from './mycomponent/episode.service';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes = [
  { path: '', component: HomeComponent},
  { path: '/episode', component: MycomponentComponent}]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService,EpisodeService],
  bootstrap: [AppComponent,MycomponentComponent]
})
export class AppModule { }
