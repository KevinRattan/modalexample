import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-child',
  templateUrl: './modal-child.component.html',
  styleUrls: ['./modal-child.component.css']
})
export class ModalChildComponent {
  constructor(public activeModal: NgbActiveModal) {}

  private fred : any = { hi: 'hello' };

  passBack() {
    this.activeModal.close(this.fred);
    }
}
