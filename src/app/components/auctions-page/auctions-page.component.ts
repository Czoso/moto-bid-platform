import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.scss'],
})
export class AuctionsPageComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }
  public goToMainPage(): void {
    // this.router.navigate(['/main']);
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      carName: ['', Validators.required],
      priceFrom: [0, [Validators.required, Validators.min(0)]],
      priceTo: [0, [Validators.required, Validators.min(0)]],
    });
  }
}
