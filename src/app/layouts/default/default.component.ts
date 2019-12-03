import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {
  isLoggedIn = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
