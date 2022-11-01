import {Component, OnInit} from '@angular/core';
import {Locationss} from './Locationss';
import {HttpErrorResponse} from '@angular/common/http';
import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocationService} from './location.service';


@Component({
  selector: 'app-Location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css']
})
export class LocationComponent implements OnInit {
  public locations: Locationss[];
  public list: Locationss[];
  closeResult:String;
  constructor(
    private modalService:NgbModal,
    private episodeService: LocationService){}

  ngOnInit() {
    this.getLocation();
    this.locations.forEach(location => location.showOnScreen = false);
    console.log(this.locations)

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  public getLocation(): void {
    this.episodeService.getLocation().subscribe(
      (response: Locationss[]) => {
        this.locations = response;
        this.list = response;
        console.log(this.locations);
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
