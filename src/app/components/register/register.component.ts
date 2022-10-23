import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public modelForm!: UntypedFormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
    this.modelForm.addValidators(CustomValidators.MatchValidator('password', 'confirmPassword'));
    console.log('dsad', this.modelForm);
  }

  public register(): void {
    // this.router.navigate(['/main']);
    this.modelForm.reset();
  }

  public get passwordMatchError(): string {
    return this.modelForm.getError('mismatch') && this.modelForm.get('confirmPassword')?.touched
      ? 'Password does not match'
      : '';
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['dupadupa', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['dupadupa1', [Validators.required, Validators.minLength(8)]],
    });
  }
}
