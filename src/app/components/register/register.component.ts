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
  public mismatchErrorMessage: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
    this.modelForm.addValidators(CustomValidators.MatchValidator('password', 'confirmPassword'));
  }

  public register(): void {
    this.router.navigate(['/main']);
    this.modelForm.reset();
  }

  public passwordMatchError(): void {
    if (this.modelForm.getError('mismatch') && this.modelForm.get('confirmPassword')?.dirty) {
      this.mismatchErrorMessage = 'Password does not match';
      this.modelForm.controls['confirmPassword'].setErrors({ mismatch: true });
    } else {
      this.mismatchErrorMessage = '';
    }
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
}
