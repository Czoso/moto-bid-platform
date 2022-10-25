import { RegisterService } from './register.service';
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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
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
    // this.registerService.createUser(formValue.email, formValue.password);
    this.registerService
      .createUser(formValue.email, formValue.password)
      .then(res => {
        console.log(res);
        // Signed in
        const user = res.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    this.router.navigate(['/main']);
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
