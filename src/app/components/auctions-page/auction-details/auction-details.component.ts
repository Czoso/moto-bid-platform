import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction, AuctionsService } from 'src/app/shared';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.scss'],
})
export class AuctionDetailsComponent implements OnInit {
  public auction?: Auction;
  constructor(private route: ActivatedRoute, private apiService: AuctionsService) {}

  public async ngOnInit(): Promise<void> {
    this.auction = await this.apiService.getSingleAuction(+this.route.snapshot.params['auctionId']);
    console.log('this.auction', this.auction);
  }
}
