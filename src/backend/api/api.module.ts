import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendAuthService } from './services/auth/auth.service';
import { BackendSettingsService } from './services/settings/settings.service';
import { BackendTaskService } from './services/task/task.service';
import { BackendUserService } from './services/user/user.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [BackendAuthService, BackendSettingsService, BackendTaskService, BackendUserService],
})
export class BackendApiModule {}
