import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
  agreed = false;

  ngOnInit() {
    document.body.classList.add('register-page');
    document.body.classList.add('off-canvas-sidebar');
  }
  ngOnDestroy() {
    document.body.classList.remove('register-page');
    document.body.classList.remove('off-canvas-sidebar');
  }
}
