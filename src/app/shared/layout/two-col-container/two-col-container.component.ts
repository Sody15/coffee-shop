import { Component, Input } from '@angular/core';

@Component({
  selector: 'cof-two-col-container',
  templateUrl: './two-col-container.component.html',
  styleUrls: ['./two-col-container.component.scss'],
})
export class TwoColContainerComponent {
  @Input() imgSrc!: string;
  @Input() imgPosition: 'left' | 'right' = 'left';

  @Input() subHeader!: string;
  @Input() header!: string;
  @Input() btnText!: string;
}
