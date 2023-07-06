import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cof-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxComponent),
      multi: true,
    },
  ],
})
export class TextBoxComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() type: 'text' | 'number' = 'text';
  @Input() maxlength?: string = '100';

  @Input() value: string = '';

  private onChange: any = (el: InputEvent) => {
    this.showLabel = !!(el.target as HTMLInputElement)?.value.length;
  };

  private onTouched: any = () => {};

  showLabel!: boolean;

  @Output() onBlur = new EventEmitter<string>();

  writeValue(value: any) {
    this.value = value;
    this.showLabel = !!this.value?.length;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();

    this.showLabel = !!this.value.length;
  }
}
