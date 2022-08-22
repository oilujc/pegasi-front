import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { createUser } from 'src/app/core/store/core.actions';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isMaternityDisabled = true;

  userForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    birthDate: ['', Validators.required],
    maternity: [{ value: '', disabled: this.isMaternityDisabled }],
  });


  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.userForm.get('gender')?.valueChanges.subscribe(val => {
      if (val == 'female') {
        this.isMaternityDisabled = false;
        const maternity = this.userForm.get('maternity');
        
        maternity?.enable();
        maternity?.addValidators([Validators.required]);

      } else {
        this.isMaternityDisabled = true;

        const maternity = this.userForm.get('maternity');
        
        maternity?.setValue('');
        maternity?.disable();
        maternity?.clearValidators();
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {

      console.log(this.userForm.value);

      this.store.dispatch(createUser({ user: this.userForm.value }));
    }
  }

}
