import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Hero} from './hero';
import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GenderInterface} from './gender.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public heroes: Hero[];
  closeResult:String;
  constructor(
    private modalService:NgbModal,
    private employeeService: EmployeeService){}

  ngOnInit() {
    this.getHeroes();
    this.heroes.forEach(hero => hero.showOnScreen = false);
    this.heroes.forEach(hero => hero.showimage = false);
    console.log(this.heroes)
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  public gender:Array<GenderInterface>=[{id:0,name:"None"},{id:1,name:"Female"},{id:2,name:"Male"}]
  public gid:number;

  public gendi(val:number): void{
    console.log(val);
    const results: Hero[] = [];
    if (val==1){
      for (const hero of this.heroes) {
        if (hero.gender=="Female") {
          results.push(hero);
        }
      }
    }
    if (val==2){
      for (const hero of this.heroes) {
        if (hero.gender=="Male") {
          results.push(hero);
        }
      }
    }

    this.heroes = results;

    if (!val) {
      this.getHeroes();
    }

  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  public showimage(hero:Hero){
      hero.showimage = !hero.showimage;

  }


  public showLearn(hero: Hero) {
    hero.showOnScreen = !hero.showOnScreen;
  }

  public showAll() {
    this.heroes.forEach(hero => hero.showOnScreen = !hero.showOnScreen)
  }

}
