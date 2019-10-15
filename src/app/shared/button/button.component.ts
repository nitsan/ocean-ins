import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'oi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() buttonClick: EventEmitter<any>;
  @Input() type: string;
  @Input() isLoading: boolean;
  @Input() label: string;

  constructor() {
    this.type = 'button';
    this.isLoading = false;
    this.label = 'שלח';
    this.buttonClick = new EventEmitter();
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
