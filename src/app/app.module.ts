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
import {LocationComponent} from './Location/Location.component';
import {LocationService} from './Location/location.service';
import {FavoriteComponent} from './favorite/favorite.component';


const routes = [
  { path: '', component: HomeComponent},
  { path: 'episode', component: MycomponentComponent},
  { path: 'location', component: LocationComponent},
  { path: 'db-heroes', component: FavoriteComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MycomponentComponent,
    LocationComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, NgbModule, RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService,EpisodeService,LocationService],
  bootstrap: [AppComponent,MycomponentComponent, LocationComponent, FavoriteComponent]
})
export class AppModule { }
