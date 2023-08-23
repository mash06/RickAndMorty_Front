import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from '../home/employee.service';
import {Hero} from '../home/hero';
import {Herorep} from './herorep';
import {Observable} from 'rxjs';
import {FavoriteService} from './favorite.service';



@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  public dbheroes: Herorep[];
  public list: Hero[];
  public heror:Herorep;

  closeResult:String;
  constructor(
    private modalService:NgbModal,
    private favoriteService: FavoriteService){}


  public getDbHeroes(): void {
    this.favoriteService.getHeroes().subscribe(
      (response: Herorep[]) => {
        this.dbheroes = response;
        this.list = response;
        console.log(this.dbheroes);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }


  public onDeleteEmloyee(employeeId: number): void {
    this.favoriteService.deleteHerorep(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDbHeroes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(hero1: Herorep, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'delete') {
      this.heror = hero1;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

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

  ngOnInit(): void {
    this.getDbHeroes()
  }

}
