import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cof-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  showLabel!: boolean;
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() _value: string = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input() maxlength?: number;

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.showLabel = !!value.length;
  }

  ngOnInit() {
    this.showLabel = !!this.value.length;
  }

  onFocus() {
    console.log('focus');
  }

  onBlur() {
    console.log('blur');
  }
}
