import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('home-page');
    document.body.classList.add('off-canvas-sidebar');
  }

  ngOnDestroy() {
    document.body.classList.remove('home-page');
    document.body.classList.remove('off-canvas-sidebar');
  }
}
