import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  public modelForm!: UntypedFormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }
  public goToMainPage(): void {
    this.router.navigate(['/main']);
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      carName: ['', Validators.required],
      priceFrom: [0, [Validators.required, Validators.min(0)]],
      priceTo: [0, [Validators.required, Validators.min(0)]],
    });
  }
}
