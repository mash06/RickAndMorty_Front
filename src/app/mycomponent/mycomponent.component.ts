// import {Component, Input, OnInit} from '@angular/core';
// import {Hero} from '../hero';
// import {EmployeeService} from '../employee.service';
// import {HttpErrorResponse} from '@angular/common/http';
// import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
//
// @Component({
//   selector: 'app-mycomponent',
//   templateUrl: './mycomponent.component.html',
//   styleUrls: ['./mycomponent.component.css']
// })
// export class MycomponentComponent implements OnInit {
//   closeResult:String;
//
//   public heroes: Hero[];
//   constructor(
//     private modalService:NgbModal,
//     private employeeService: EmployeeService){}
//
//   ngOnInit() {
//
//     this.getHeroes();
//     this.heroes.forEach(hero => hero.showOnScreen = false)
//     console.log(this.heroes)
//   }
//
//   public getHeroes(): void {
//     this.employeeService.getHeroes().subscribe(
//       (response: Hero[]) => {
//         this.heroes = response;
//         console.log(this.heroes);
//       },
//       (error: HttpErrorResponse) => {
//         console.log(error.message);
//       }
//     );
//   }
//
//
//   open(content,hero) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//
//   }
//
//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }
//
//
// }


import {Component, Input, OnInit} from '@angular/core';
import {Episode} from './Episode';
import {HttpErrorResponse} from '@angular/common/http';
import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EpisodeService} from './episode.service';


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  public episodes: Episode[];
  public list: Episode[];
  closeResult:String;
  constructor(
    private modalService:NgbModal,
    private episodeService: EpisodeService){}

  ngOnInit() {
    this.getEpisodes();
    this.episodes.forEach(episode => episode.showOnScreen = false);
    console.log(this.episodes)

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  public getEpisodes(): void {
    this.episodeService.getEpisode().subscribe(
      (response: Episode[]) => {
        this.episodes = response;
        this.list = response;
        console.log(this.episodes);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

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


}
