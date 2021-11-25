import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public heroes: Hero[];
  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getHeroes();
    this.heroes.forEach(hero => hero.showOnScreen = false)
    console.log(this.heroes)
  }

  public getHeroes(): void {
    this.employeeService.getHeroes().subscribe(
      (response: Hero[]) => {
        this.heroes = response;
        console.log(this.heroes);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);

    const results: Hero[] = [];
    for (const hero of this.heroes) {
      if (hero.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || hero.status.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || hero.origin.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || hero.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(hero);
      }
    }
    this.heroes = results;
    if (results.length === 0 || !key) {
      this.getHeroes();
    }
  }

  public showLearn(hero: Hero) {
    hero.showOnScreen = !hero.showOnScreen;
  }

  public showAll() {
    this.heroes.forEach(hero => hero.showOnScreen = !hero.showOnScreen)
  }

}
