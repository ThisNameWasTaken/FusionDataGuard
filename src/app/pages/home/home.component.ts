import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-home-cmp',
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
	agreed = false;
	test: Date = new Date();

	ngOnInit() {
		const body = document.getElementsByTagName('body')[0];
		body.classList.add('home-page');
		body.classList.add('off-canvas-sidebar');
	}

	ngOnDestroy() {
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('home-page');
		body.classList.remove('off-canvas-sidebar');
	}
}
