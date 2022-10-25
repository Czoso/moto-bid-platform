import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-tile',
  templateUrl: './auction-tile.component.html',
  styleUrls: ['./auction-tile.component.scss'],
})
export class AuctionTileComponent implements OnInit {
  @Input() public auctionData: any;

  public img = '../../../../assets/images/bmw.jpg';
  public productionYear = 2015;

  constructor() {}

  public ngOnInit(): void {
    console.log('auction tile');
  }
}
