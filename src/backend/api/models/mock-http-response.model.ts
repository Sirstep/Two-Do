export interface MockHttpResponse {
	code: MockHttpResponseCode;
	message: string;
}

export enum MockHttpResponseCode {
	OK = 200,
	CREATED = 201,
	NOT_FOUND = 404,
	INTERNAL = 500,
	FORBIDDEN = 403,
	CONFLICT = 409,
}
