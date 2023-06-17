import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cof-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options = new Map<string, string>();
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() maxlength?: number;

  selectedOption: string = '';

  private onChange: any = (el: InputEvent) => {
    this.showLabel = !!(el.target as HTMLInputElement).value.length;
  };

  private onTouched: any = () => {};

  showLabel!: boolean;

  @Output() onBlur = new EventEmitter<string>();

  writeValue(option: any) {
    this.selectedOption = option;
    this.showLabel = !!this.selectedOption?.length;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onInputChange(event: any) {
    this.selectedOption = event.target.value;
    this.onChange(this.selectedOption);
    this.onTouched();

    this.showLabel = !!this.selectedOption.length;
  }
}
