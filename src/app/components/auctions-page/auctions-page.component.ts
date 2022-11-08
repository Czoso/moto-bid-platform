import { Auction } from '../../shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuctionsPageService } from './auctions-page.service';

@Component({
  selector: 'app-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.scss'],
})
export class AuctionsPageComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  public auctions?: Auction[] = [];
  constructor(private formBuilder: FormBuilder, private apiService: AuctionsPageService) {}

  public async ngOnInit(): Promise<void> {
    this.createForm();
    this.auctions = await this.apiService.getAuctions();
  }

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      carName: ['', Validators.required],
      priceFrom: [0, [Validators.required, Validators.min(0)]],
      priceTo: [0, [Validators.required, Validators.min(0)]],
    });
  }
}
