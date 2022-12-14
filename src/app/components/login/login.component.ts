import { DatabaseService } from 'src/app/shared';
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
  private currentUser = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private databaseService: DatabaseService
  ) {}

  public ngOnInit(): void {
    this.databaseService.currentUser$.subscribe((user: string) => {
      this.currentUser = user;
    });
    this.createForm();
  }
  public onSubmit(): void {
    const formValue = this.modelForm.value;
    this.loginService
      .loginUser(formValue.email, formValue.password)
      .then(res => {
        const user = res.user;
        this.snackBar.open('User logged in', 'Ok!', {
          duration: 2500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.databaseService.setUser(user.uid);
        this.router.navigate(['/main']);
        this.modelForm.reset();
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
      email: ['siepasiepa@gmail.com', [Validators.required, Validators.email]],
      password: ['siepasiepa', [Validators.required, Validators.minLength(8)]],
    });
  }
}
