import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[twoRegexValidator]',
})
export class RegexValidatorDirective {
	@Input() pattern!: RegExp;

	@HostListener('keydown', ['$event'])
	onKeyDown(keydown: KeyboardEvent) {
		return this.pattern.test(keydown.key);
	}
}
