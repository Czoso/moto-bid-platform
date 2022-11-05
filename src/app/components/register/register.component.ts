import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  public mismatchErrorMessage = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.createForm();
    this.modelForm.addValidators(CustomValidators.MatchValidator('password', 'confirmPassword'));
  }

  public passwordMatchError(): void {
    if (this.modelForm.getError('mismatch') && this.modelForm.get('confirmPassword')?.dirty) {
      this.mismatchErrorMessage = 'Password does not match';
      this.modelForm.controls['confirmPassword'].setErrors({ mismatch: true });
    } else {
      this.mismatchErrorMessage = '';
    }
  }
  public onSubmit(): void {
    const formValue = this.modelForm.value;
    console.log(formValue);
    this.registerService
      .createUser(formValue.email, formValue.password)
      .then(res => {
        const user = res.user;
        this.snackBar.open('User registered', 'Ok!', {
          duration: 2500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Ok!', {
          duration: 2500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/main']);
      });

    this.modelForm.reset();
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
