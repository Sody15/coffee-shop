import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cof-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() name = '';
  @Input() value = '';

  @Output() onUpdate = new EventEmitter<string>();

  // Variables to store the radio button state
  checked: boolean = false;
  disabled: boolean = false;

  // ControlValueAccessor interface methods
  onChange: any = () => {
    console.log(this.value);
    this.onUpdate.emit(this.value);
  };
  onTouched: any = () => {};

  // Method to update the radio button value and trigger onChange
  updateValue(event: Event) {
    this.checked = (event.target as HTMLInputElement).value === this.value;
    this.onChange(this.value);

    console.log(this.value);
  }

  // ControlValueAccessor interface methods
  writeValue(value: any): void {
    this.checked = value === this.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
