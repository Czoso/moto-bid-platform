import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public login(): void {
    // this.router.navigate(['/main']);
    this.modelForm.reset();
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
