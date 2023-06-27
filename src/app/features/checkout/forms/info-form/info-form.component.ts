import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usStates } from '../../checkout-constants';
import { Info } from '../../state/checkout.reducer';

@Component({
  selector: 'cof-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent implements OnInit {
  @Input() info!: Info | undefined;

  form!: FormGroup;
  @Output() onSubmit = new EventEmitter<FormGroup>();

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
      email: [this.info?.email || '', [Validators.required, Validators.email]],
      country: [this.info?.country || '', [Validators.required]],
      firstName: [this.info?.firstName || '', [Validators.required]],
      lastName: [this.info?.lastName || '', [Validators.required]],
      address: [this.info?.address || '', [Validators.required]],
      apartment: [this.info?.apartment || ''],
      city: [this.info?.city || '', [Validators.required]],
      state: [this.info?.state || '', [Validators.required]],
      zip: [this.info?.zip || '', [Validators.required]],
      phone: [this.info?.phone || ''],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
