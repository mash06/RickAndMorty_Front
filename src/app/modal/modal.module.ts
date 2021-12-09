import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';
// import { ModalComponent } from './modal/modal.component';
// import { PortalModule } from '../portal/portal.module';

@NgModule({
  declarations: [ModalOutletComponent],
  imports: [
    CommonModule,
    // PortalModule
  ],
  exports: [ModalOutletComponent]
})
export class ModalModule { }
