import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionTileComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AuctionsService } from './services';

@NgModule({
  declarations: [AuctionTileComponent],
  imports: [CommonModule, RouterModule, MatIconModule, MatTooltipModule],
  exports: [AuctionTileComponent],
  providers: [AuctionsService],
})
export class SharedModule {}
