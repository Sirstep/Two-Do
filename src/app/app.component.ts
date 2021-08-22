import { Component } from '@angular/core';
import { AuthService } from './libs/api/services/auth.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Regex } from '@two/static';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'two-do';
	alphanumeric = new RegExp(Regex.ALPHANUMERIC);
	unsubscribe$ = new Subject<void>();

	constructor(private authService: AuthService) {
		this.authService
			.login({ username: 'stephen', password: 'password' })
			.pipe(tap((response) => console.log(response)))
			.subscribe();
	}
}
