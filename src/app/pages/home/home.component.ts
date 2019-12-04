import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from 'src/app/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  isBottomSheetOpen = false;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    document.body.classList.add('home-page');
    document.body.classList.add('off-canvas-sidebar');
  }

  ngOnDestroy() {
    document.body.classList.remove('home-page');
    document.body.classList.remove('off-canvas-sidebar');
  }

  toggleBottomSheet() {
    this.isBottomSheetOpen = !this.isBottomSheetOpen;

    this.isBottomSheetOpen
      ? this.bottomSheet.open(BottomSheetComponent)
      : this.bottomSheet.dismiss();
  }
}
