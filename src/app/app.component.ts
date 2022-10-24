import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from './home/employee.service';
// import { HttpErrorResponse } from '@angular/common/http';
// import {Hero} from './home/hero';
// import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {GenderInterface} from './home/interfaces/gender.interface';
// import {StatusInterface} from './home/interfaces/status.interface';
// import {SpeciesInterface} from './home/interfaces/species.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public heroes: Hero[];
  // public list: Hero[];
  // closeResult:String;
  // constructor(
  //   private modalService:NgbModal,
  //   private employeeService: EmployeeService){}
  //
  //  ngOnInit() {
  //   this.getHeroes();
  //   this.heroes.forEach(hero => hero.showOnScreen = false);
  //   console.log(this.heroes)
  // //
  //  }
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  //
  // }
  //
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  // public countpart:number;
  // public gender:Array<GenderInterface>=[{id:0,name:"None"},{id:1,name:"Female"},{id:2,name:"Male"}]
  // public gid:number;
  //
  // public GenderMethod(val:number): void{
  //   console.log(val);
  //   const results: Hero[] = [];
  //
  //   if (val==1){
  //     for (const hero of this.list) {
  //       if (hero.gender=="Female") {
  //         results.push(hero);
  //       }
  //     }
  //   }
  //   if (val==2){
  //     for (const hero of this.list) {
  //       if (hero.gender=="Male") {
  //         results.push(hero);
  //       }
  //     }
  //   }
  //   this.heroes = results;
  //   this.countpart=results.length;
  //
  //   if (!val) {
  //     this.getHeroes();
  //     this.countpart=results.length;
  //   }
  //
  // }
  //
  // public status:Array<StatusInterface>=[{id:0,status:"None"},
  //                                       {id:1,status:"Alive"},
  //                                       {id:2,status:"Dead"},
  //                                       {id:3,status:"unknown"}]
  // public stid:number;
  //
  // public StatusMethod(val:number): void{
  //   console.log(val);
  //   const results: Hero[] = [];
  //   if (val==1){
  //     for (const hero of this.list) {
  //       if (hero.status=="Alive") {
  //         results.push(hero);
  //       }
  //     }
  //   }
  //   if (val==2){
  //     for (const hero of this.list) {
  //       if (hero.status=="Dead") {
  //         results.push(hero);}
  //     }
  //   }
  //   if (val==3){
  //     for (const hero of this.list) {
  //       if (hero.status=="unknown") {
  //         results.push(hero); }
  //     }
  //   }
  //   this.heroes = results;
  //   this.countpart=results.length;
  //   if (!val) {
  //     this.getHeroes();
  //     this.countpart=results.length;
  //   }
  //
  // }
  //
  // public species:Array<SpeciesInterface>=[{id:0,species:"None"},{id:1,species:"Human"},{id:2,species:"Alien"}]
  // public spid:number;
  // public SpeciesMethod(val:number): void{
  //   console.log(val);
  //   const results: Hero[] = [];
  //   if (val==1){
  //     for (const hero of this.list) {
  //       if (hero.species=="Human") {
  //         results.push(hero);
  //       }
  //     }
  //   }
  //   if (val==2){
  //     for (const hero of this.list) {
  //       if (hero.species=="Alien") {
  //         results.push(hero);
  //       }
  //     }
  //   }
  //   this.heroes = results;
  //   this.countpart=results.length;
  //   if (!val) {
  //     this.getHeroes();
  //     this.countpart=results.length;
  //   }
  // }
  //
  //
  //
  // public getHeroes(): void {
  //   this.employeeService.getHeroes().subscribe(
  //     (response: Hero[]) => {
  //       this.heroes = response;
  //       this.list = response;
  //       //this.countpart=response.length;
  //       console.log(this.heroes);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   );
  //
  // }
  //
  // public searchEmployees(key: string): void {
  //   console.log(key);
  //
  //   const results: Hero[] = [];
  //   for (const hero of this.heroes) {
  //     if (hero.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || hero.status.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || hero.origin.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || hero.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(hero);
  //     }
  //   }
  //   this.heroes = results;
  //   //this.countpart=results.length;
  //   if (results.length === 0 || !key) {
  //     this.getHeroes();
  //
  //   }
  // }
  //


  // public showAll() {
  //   this.heroes.forEach(hero => hero.showOnScreen = !hero.showOnScreen)
  // }


}
