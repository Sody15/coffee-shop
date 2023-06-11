import { Component, Input } from '@angular/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'cof-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
}
