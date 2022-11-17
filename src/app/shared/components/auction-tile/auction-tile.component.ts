import { Auction } from 'src/app/shared';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auction-tile',
  templateUrl: './auction-tile.component.html',
  styleUrls: ['./auction-tile.component.scss'],
})
export class AuctionTileComponent {
  @Input() public auctionData!: Auction;

  constructor() {}
}
