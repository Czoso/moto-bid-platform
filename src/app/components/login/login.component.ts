import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.createForm();
  }
  public login(): void {
    // this.router.navigate(['/main']);
    this.modelForm.reset();
  }
  public onSubmit(): void {
    console.log('log');
    const formValue = this.modelForm.value;
    console.log(formValue);
    this.loginService
      .loginUser(formValue.email, formValue.password)
      .then(res => {
        const user = res.user;
        this.snackBar.open('User logged in', 'Ok!', {
          duration: 2500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      })
      .catch(error => {
        this.snackBar.open(error.message, 'Ok!', {
          duration: 2500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      });
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
