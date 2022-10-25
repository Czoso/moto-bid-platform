import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionTileComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AuctionTileComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [AuctionTileComponent],
})
export class SharedModule {}
