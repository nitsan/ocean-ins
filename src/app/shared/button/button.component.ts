import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'oi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() buttonClick: EventEmitter<any>;
  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
    this.buttonClick = new EventEmitter();
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
