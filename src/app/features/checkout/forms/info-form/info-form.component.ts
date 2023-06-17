import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usStates } from '../../checkout-constants';

@Component({
  selector: 'cof-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent implements OnInit {
  form!: FormGroup;

  countryOptions = new Map<string, string>([
    ['US', 'US'],
    ['China', 'China'],
  ]);
  usStates = usStates;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      apartment: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phone: [''],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {}
}
