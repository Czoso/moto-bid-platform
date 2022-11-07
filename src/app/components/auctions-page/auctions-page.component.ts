import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionsPageService } from './auctions-page.service';

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.scss'],
})
export class AuctionsPageComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  constructor(private formBuilder: FormBuilder, private apiService: AuctionsPageService) {}

  public ngOnInit(): void {
    this.createForm();
    const test = this.apiService.getAuctions();
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      carName: ['', Validators.required],
      priceFrom: [0, [Validators.required, Validators.min(0)]],
      priceTo: [0, [Validators.required, Validators.min(0)]],
    });
  }
}
