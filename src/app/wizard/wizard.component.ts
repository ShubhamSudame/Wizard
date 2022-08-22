import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  @ViewChild('wizardTemplate') public wizardTemplate!: TemplateRef<any>;
  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false,
  };

  @Input() items!: any[];
  @Input() activeIndex!: number;
  @Output() activeIndexChange = new EventEmitter<number>();
  @Input() parentForm: any;
  
  visited!: Set<number>;

  @Input() forms!: TemplateRef<any>;
  constructor(private fb: UntypedFormBuilder,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.visited = new Set<number>();
    console.log(this.parentForm);
    console.log(this.forms);
  }

  show() {
    this.openWizardModal(this.wizardTemplate);
  }

  openWizardModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign(this.config, { class: 'gray modal-xl' })
    );
  }

  hide() {
    this.modalRef!.hide();
    this.parentForm.reset();
    this.visited.clear();
    this.activeIndex = 0;
    this.activeIndexChange.emit(this.activeIndex);
  }

  previous() {
    if (this.activeIndex) {
      this.activeIndex--;
      this.activeIndexChange.emit(this.activeIndex);
    }
  }
  next() {
    this.visited.add(this.activeIndex);
    this.activeIndex++;
    this.activeIndexChange.emit(this.activeIndex);
    if (this.activeIndex === this.items.length) {
      this.hide();
    }
  }

}
