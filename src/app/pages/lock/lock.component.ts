import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lock-cmp',
  templateUrl: './lock.component.html',
})
export class LockComponent implements OnInit, OnDestroy {
  currentDate = new Date();

  ngOnInit() {
    document.body.classList.add('lock-page');
    document.body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];

    setTimeout(function() {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove('card-hidden');
    }, 700);
  }

  ngOnDestroy() {
    document.body.classList.remove('lock-page');
    document.body.classList.remove('off-canvas-sidebar');
  }
}
