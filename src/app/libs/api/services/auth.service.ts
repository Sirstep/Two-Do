import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendAuthService } from '@two/backend';
import { MockHttpResponse, Credential } from '@two/api';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly backendAuthService: BackendAuthService) {}

	/**
	 * Attempt to register user with provided credential.
	 * @param credential username and password
	 * @returns success or failure response from mock backend
	 */
	register(credential: Credential): Observable<MockHttpResponse> {
		// return this.http.post<Credential>(`${this.baseUrl}/auth/register`, credential);
		return this.backendAuthService.register(credential);
	}

	/**
	 * Attempt to login user with provided credential.
	 * @param credential username and password
	 * @returns success or failure response from mock backend
	 */
	login(credential: Credential): Observable<MockHttpResponse> {
		// return this.http.post<Credential>(`${this.baseUrl}/auth/register`, credential);
		return this.backendAuthService.login(credential);
	}
}
