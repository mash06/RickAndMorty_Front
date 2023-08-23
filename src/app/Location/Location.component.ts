import {Component, OnInit} from '@angular/core';
import {Locationss} from './Locationss';
import {HttpErrorResponse} from '@angular/common/http';
import{ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocationService} from './location.service';
import {Hero} from '../home/hero';
import {SpeciesInterface} from '../home/interfaces/species.interface';


@Component({
  selector: 'app-Location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css']
})
export class LocationComponent implements OnInit {
  public locations: Locationss[];
  public list: Locationss[];
  closeResult:String

  private countpart: number;
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


  public searchLocation(key: string): void {
    console.log(key);

    const results: Locationss[] = [];
    for (const loc of this.locations) {
      if (loc.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(loc);
      }
    }
    this.locations = results;
    this.countpart=results.length;
    if (results.length === 0 || !key) {
      this.getLocation();

    }
  }

  public showAll() {
    this.locations.forEach(hero => hero.showOnScreen = !hero.showOnScreen)
  }

}
