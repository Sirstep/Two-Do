import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { LabeledInputComponent } from './components/labeled-input/labeled-input.component';
import { RegexValidatorDirective } from './directives/regex-validator.directive';

@NgModule({
	declarations: [LabeledInputComponent, RegexValidatorDirective],
	imports: [CommonModule, MatInputModule],
	exports: [LabeledInputComponent, RegexValidatorDirective],
})
export class BaseModule {}
