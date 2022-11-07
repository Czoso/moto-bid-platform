import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ref, set } from 'firebase/database';
import { DatabaseService } from 'src/app/shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, DatabaseService],
})
export class RegisterComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  public mismatchErrorMessage = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private database: DatabaseService
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
        set(ref(this.database.getDatabase(), `users/${user.uid}`), {
          email: formValue.email,
          username: formValue.username,
          photoURL:
            '//e-cdn-images.dzcdn.net/images/artist/a423dd42b7394eeacc882be8ac633eee/264x264-000000-80-0-0.jpg ',
        });
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
