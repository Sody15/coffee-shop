import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'cof-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      state('inactive', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('active', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('inactive => active', animate('500ms ease-in-out')),
      transition('active => inactive', animate('500ms ease-in-out')),
    ]),
  ],
})
export class StepperComponent {
  @ContentChildren(TemplateRef) contentTemplates!: QueryList<TemplateRef<any>>;

  @Input() steps: string[] = [];
  @Input() stepIndex: number = 0;

  @Output() onChange = new EventEmitter<number>();

  onStepIndexChange(stepIndex: number) {
    this.stepIndex = stepIndex;
    this.onChange.emit(this.stepIndex);
  }
}
