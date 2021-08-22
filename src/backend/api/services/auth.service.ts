import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credential, MockHttpResponse, MockHttpResponseCode } from '@two/backend';
// import { MockHttpResponse, MockHttpResponseCode } from '../models/mock-http-response.model';

import storedCredentials from '../../../assets/credentials.json';

@Injectable({
	providedIn: 'root',
})
export class BackendAuthService {
	constructor() {}

	register(credential: Credential): Observable<MockHttpResponse> {
		if (
			(storedCredentials as Credential[]).find((storedCredential) => equalsIgnoreCase(storedCredential.username, credential.username))
		) {
			const registerError: MockHttpResponse = {
				code: MockHttpResponseCode.CONFLICT,
				message: 'Username taken.',
			};
			return throwError(registerError);
		}
		const registerSuccess: MockHttpResponse = {
			code: MockHttpResponseCode.CREATED,
			message: 'Registration successful.',
		};
		return of(registerSuccess);
	}

	login(credential: Credential): Observable<MockHttpResponse> {
		if (
			(storedCredentials as Credential[]).find(
				(storedCredential) =>
					equalsIgnoreCase(storedCredential.username, credential.username) &&
					equalsIgnoreCase(storedCredential.password, credential.password)
			)
		) {
			const loginSuccess: MockHttpResponse = {
				code: MockHttpResponseCode.OK,
				message: 'Login successful.',
			};
			return of(loginSuccess);
		}
		const loginError: MockHttpResponse = {
			code: MockHttpResponseCode.NOT_FOUND,
			message: 'Incorrect credentials.',
		};
		return of(loginError);
	}
}

function equalsIgnoreCase(firstString: string, secondString: string): boolean {
	return firstString.localeCompare(secondString, undefined, { sensitivity: 'base' }) === 0;
}
